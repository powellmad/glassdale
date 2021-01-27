import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const criminalContainer = document.querySelector(".criminalContainer")

export const CriminalList = () => {
  getCriminals()
  .then(() => {
    const criminalArray = useCriminals()
    renderToDOM(criminalArray)
  })
}

const renderToDOM = criminalsArray => {
  let criminalHTML = ""
      for (const criminalObj of criminalsArray) {
        criminalHTML += Criminal(criminalObj)
      }
    
      criminalContainer.innerHTML = `
        <h3>Criminals</h3>
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
    console.log(chosenConvictionObject.name)

    const criminalsArray = useCriminals()
    const filteredCriminalsArray = criminalsArray.filter(criminalObj => { 
      return criminalObj.conviction === chosenConvictionObject.name
    })

    renderToDOM(filteredCriminalsArray)
  }
})