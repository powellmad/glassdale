export const NoteHTMLConverter = (noteObject, relatedCriminal) => {
    return `
        <section class="note">
            <div class="note__timestamp">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')}</div>
            <div class="note__criminalId">Suspect: ${relatedCriminal.name}</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__text">${ noteObject.text }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}