import { getOfficers, useOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {
    console.log(changeEvent)
    if (changeEvent.target.id === "officerSelect") {

        const selectedOfficer = changeEvent.target.value
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    getOfficers()
    .then( () => {
      const officersArray = useOfficers()
      render(officersArray)
    })
}

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(officer => `<option value="${officer.name}">${officer.name}</option>`).join("")
            }
        </select>
    `
}