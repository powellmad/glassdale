import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    customEvent("ShowNotesClicked" = () => {
        const allNotesinHTMLForm = NoteList()
        contentTarget.innerHTML = `
        ${allNotesinHTMLForm}
        `
    })
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
        return NoteHTMLConverter(noteObject)
    }).join("")

    contentTarget.innerHTML = `
    <h3>Notes: </h3>
    <section class="notesList">
    ${allNotesConvertedToStrings}
    </section>
    `
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}