import { useCriminals } from "../criminals/CriminalProvider.js"

const AssociateList = (criminalObj) => {
    const contentContainer = document.querySelector(".associatesContainer") 
    console.log(criminalObj)
    const HTMLRep = () => {
    `<h1>Known associates for ${criminalObj.name}</h1>
    ${criminalObj}.known__associates.map(associate => {
        return <section class="associate__container">
        <div class="associate__name">${associate.name}</div>
        <div class="associate__alibi">Alibi: ${associate.alibi}</div>
        </section>}).join(")`
} 
}

eventHub.addEventListener("AssociatesClicked", event => { 
    contentTarget.innerHTML = 
    `<div>${AssociateList}</div>`
})

// When the user clicks the button, you must iterate the array of known_associates for that criminal and then display the following information. You can display it in a dialog box, as a sidebar, at the top of the screen, or wherever you like.

// The name of the known associate
// The alibi that the known associate is providing for the criminal to try to prove the criminals' innocence.
// If any of the alibis for some of your suspects are noteworthy, then make sure you create a new notes and POST it to your personal notes API.

