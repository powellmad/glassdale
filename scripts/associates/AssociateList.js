import { useCriminals } from "../criminals/CriminalProvider.js"

export const AssociateList = (criminalObj) => {
    const contentContainer = document.querySelector(".associatesContainer") 
    console.log(criminalObj)
    const HTMLRep = `
    <h1>Known associates for ${criminalObj.name}</h1>
    ${criminalObj}.known__associates.map(associate => {
        return <section class="associate__container">
        <div class="associate__name">${associate.name}</div>
        <div class="associate__alibi">Alibi: ${associate.alibi}</div>
        </section>
    }).join(")`
}