const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <label for="text-field"></label>
    <input type="text" id="note-text">

    <label for="note-suspect">Suspect:</label>
    <input type="text" id="note-suspect">

    <label for="text"></label>
    <input type="text" id="title" name="title" placeholder="Start Note...">
    
    <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}