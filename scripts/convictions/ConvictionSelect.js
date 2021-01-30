import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: changeEvent.target.value
            }
        })
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const ConvictionSelect = () => {

    getConvictions()
    .then( () => {
        const convictionsArray = useConvictions()
        render(convictionsArray)
    })
}

const render = convictionsCollection => {
    
    contentTarget.innerHTML = `
    <p>Filter by:</p>    
    <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(conviction => `<option value="${conviction.id}">${conviction.name}</option>`).join("")
            }
        </select>
    `
}