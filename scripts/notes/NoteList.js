import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
        return NoteHTMLConverter(noteObject)
    }).join("")
    
    contentTarget.innerHTML = `
    <h3>All Notes: </h3>
    <section class="notesList">
    ${allNotesConvertedToStrings}
    </section>
    `
}

const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })
}