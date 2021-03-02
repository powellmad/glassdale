let notes = []

const eventHub = document.querySelector(".container")

// 
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

// Fetching Notes from our local api
export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

// Saving a Note
export const saveNote = note => {
    let stringifiedObj = JSON.stringify(note)

    return fetch("http://localhost:8088/db", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

export const useNotes = () => {
    return notes.slice()
}

// Deleting a Note
export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/db/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}