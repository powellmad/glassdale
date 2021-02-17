import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"

const eventHub = document.querySelector(".container")
const criminalContainer = document.querySelector(".criminalContainer")

export const CriminalList = () => {
  getCriminals()
  .then(getCriminalFacilities)
  .then(getFacilities)
  .then(() => {
    const criminalArray = useCriminals()
    const criminalFacilitiesArray = useCriminalFacilities()
    const facilitiesArray = useFacilities()

    renderToDOM(criminalArray, criminalFacilitiesArray, facilitiesArray)
  })
}

const renderToDOM = (crimCollection, crimFacCollection, facCollection) => {
  let criminalHTML = ""
      for (const criminalObj of crimCollection) {
        // Filtering to find relationships between facilities & criminals (into array)
        const arrayofCrimFacObj = crimFacCollection.filter(criminalFacility => criminalObj.id === criminalFacility.criminalId)
        // Convert relationship to facilities using map()
        const arrayOfFacObj = arrayofCrimFacObj.map(criminalFacility => {
             const relatedFacObj = facCollection.find(facility => facility.id === criminalFacility.facilityId)
             return relatedFacObj
        })
        
        criminalHTML += Criminal(criminalObj)
      }
    
      criminalContainer.innerHTML = `
        <h3>Glassdale Criminals</h3>
        <section class="criminalList">
        ${criminalHTML}
        </section>`
}

eventHub.addEventListener("crimeChosen", event => {
  if (event.detail.crimeThatWasChosen !== "0") {
    const convictionsArray = useConvictions()
    const chosenConvictionObject = convictionsArray.find(convictionObj => {
      console.log("currently on", convictionObj)
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
    })

    const criminalsArray = useCriminals()
    const filteredByConviction = criminalsArray.filter(criminalObj => { 
      return criminalObj.conviction === chosenConvictionObject.name
    })

    renderToDOM(filteredByConviction)
  }
})

eventHub.addEventListener("officerSelected", event => {
  // console.log(event)
    if (event.detail.officer !== "0") {

    const criminalsArray = useCriminals()
    const filteredbyOfficer = criminalsArray.filter(criminalObj => criminalObj.arrestingOfficer === event.detail.officer)

    renderToDOM(filteredbyOfficer) 
    }
    
})