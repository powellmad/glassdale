import { getNotes, useNotes } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"
import { NoteHTMLConverter } from "./Note.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteList")

eventHub.addEventListener("showNotesClicked", evt => {
    NoteList()
})

const render = (noteArray, criminalArray) => {
    contentTarget.innerHTML = noteArray.map(note => {
        // debugger
        const relatedCriminalObj = criminalArray.find(criminal => criminal.id === note.criminalId)
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