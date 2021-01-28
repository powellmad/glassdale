export const Criminal = (criminalObj) => {
    return `
        <div class="criminal">
            <h4>${criminalObj.name}</h4>
            <p>Age: ${criminalObj.age}</p>
            <p>Conviction: ${criminalObj.conviction}</p>
            <p>Arresting Officer: ${criminalObj.arrestingOfficer}</p>
            <p>${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    `
}