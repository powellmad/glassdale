import { ShowAssociatesButton } from "../associates/ShowAssociates.js"
import { useFacilities } from "../facility/FacilityProvider.js"

export const Criminal = (criminalObj) => {
    return `
        <div class="criminal">
            <h4>${criminalObj.name}</h4>
            <p>Age: ${criminalObj.age}</p>
            <p>Conviction: ${criminalObj.conviction}</p>
            <p>Arresting Officer: ${criminalObj.arrestingOfficer}</p>
            <p>${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${useFacilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            ${ShowAssociatesButton(criminalObj)}
        </div>
    `
}