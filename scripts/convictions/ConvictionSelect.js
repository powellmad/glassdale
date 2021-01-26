import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {

    getConvictions()
    .then( () => {
      const convictionsArray = useConvictions()
      render(convictionsArray)
    })
}

const render = convictionsCollection => {
    
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(conviction => `<option value=${conviction.id}>${conviction.name}</option>`).join("")
            }
        </select>
    `
}