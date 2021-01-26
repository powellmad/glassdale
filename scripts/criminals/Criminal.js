export const Criminal = (criminalObj) => {
    return `
        <div class="criminal">
            <h4>${criminalObj.name}</h4>
            <p>${criminalObj.age}</p>
            <p>${criminalObj.conviction}</p>
            <p>${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    `
}