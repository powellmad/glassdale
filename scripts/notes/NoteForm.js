const contentTarget = document.getElementById("noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <label for="note-date">Date:</label>
    <input type="date" id="note-date">

    <label for="note-suspect">Suspect:</label>
    <input type="text" id="note-suspect">

    <label for="note-text">Note:</label>
    <input type="text" id="note-text" placeholder="Start Note...">

    <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const date = document.getElementById("note-date").value
        const suspect = document.getElementById("note-suspect").value
        const text = document.getElementById("note-text").value
        
        const newNote = {
            Date: date,
            Suspect: suspect,
            Text: text
        }
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    render()
}