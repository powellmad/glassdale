import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"


export const CriminalList = () => {

    getCriminals()
    .then(() => {
      const criminalArray = useCriminals()
      const criminalContainer = document.querySelector(".criminalContainer")

      let criminalHTML = ""
      for (const criminalObj of criminalArray) {
        criminalHTML += Criminal(criminalObj)
      }
      
      criminalContainer.innerHTML += `
        <h3>Criminals</h3>
        <section class="criminalList">
        ${criminalHTML}
        </section>`
    })
}