import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"
import { NoteHTMLConverter } from "./Note.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteList")

eventHub.addEventListener("showNotesClicked", evt => {
    NoteList()
})

const render = (noteArray, criminalArray) => {
    contentTarget.innerHTML = noteArray.map(note => {
        const relatedCriminalObj = criminalArray.find(criminal => criminal.id === note.criminalId)
        console.log(relatedCriminalObj)
    return NoteHTMLConverter(note, relatedCriminalObj)
            
    }).join("")

}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
            render(notes, criminals)
        })
    }


eventHub.addEventListener ("noteStateChanged", event => {
    const allNotes = useNotes()
    render(allNotes)
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})