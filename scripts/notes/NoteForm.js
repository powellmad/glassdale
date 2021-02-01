import { saveNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    
    contentTarget.innerHTML = `
    <h4>Create a Note:</h4>
    <label for="note-date">Date:</label>
    <input type="date" id="note-date">

    <label for="note-suspect">Suspect:</label>
    <input type="text" id="note-suspect">
    
    <label for="note-author">Author:</label>
    <input type="text" id="note-author">

    <label for="note-text">Note:</label>
    <input type="text" id="note-text" placeholder="Start Note...">

    <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        console.log("I saved my note")
        const date = document.getElementById("note-date").value
        const suspect = document.getElementById("note-suspect").value
        const author = document.getElementById("note-author").value
        const text = document.getElementById("note-text").value
        
        const newNote = {
            date: date,
            suspect: suspect,
            author: author,
            text: text
        }
        saveNote(newNote)
    }
})