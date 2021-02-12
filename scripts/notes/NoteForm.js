import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")


const render = (criminalCollection) => {
    contentTarget.innerHTML = `
    <h3>New Note:</h3>
    <form action="">
        <fieldset>
            <label for="note-criminalId">Suspect:</label>
            <select id="note-criminalId" class="criminalSelect">
                <option value="0">Please select a suspect...</option>
                ${criminalCollection.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`)}.join("")
            </select>
        </fieldset>
        <fieldset>
            <label for="note-date">Date:</label>
            <input type="date" id="note-date">
        </fieldset>
        <fieldset>    
            <label for="note-author">Author:</label>
            <input type="text" id="note-author">
        </fieldset>
        <fieldset>
            <label for="note-text">Note:</label>
            <input type="text" id="note-text" placeholder="Start Note...">
        </fieldset>
        <fieldset>
            <button id="saveNote">Save Note</button>
    </form>`
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
        const criminalCollection = useCriminals()
        render(criminalCollection)
    })
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        console.log("I saved my note")
        const date = document.getElementById("note-date").value
        const criminalId = document.getElementById("note-criminalId").value
        const author = document.getElementById("note-author").value
        const text = document.getElementById("note-text").value
        
        const newNote = {
            date: date,
            criminalId: parseInt(criminalId),
            author: author,
            text: text
        }
        saveNote(newNote)
    }
})