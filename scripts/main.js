import { CriminalList } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNoteButton.js"
import "./notes/NoteList.js"

console.log("Welcome to the main module")

CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()