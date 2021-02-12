export const NoteHTMLConverter = (noteObject, relatedCriminalObj) => {
    return `
        <section class="note">
            <div class="note__timestamp">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')}</div>
            <div class="note__criminalId">Suspect: ${relatedCriminalObj.criminalId }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__text">${ noteObject.text }</div>
        </section>
    `
}