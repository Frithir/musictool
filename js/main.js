import { scaleDefinitions, generateScaleNotes } from "./scales.js";
import {
  chordFormulas,
  guitarChordShapes,
  showChordOnInstruments,
} from "./chords.js";
import {
  updatePianoDisplay,
  updateFretboardDisplay,
  showGuitarChordShape,
} from "./instruments.js";
import { createNotation } from "./notation.js";
import { initUI } from "./ui.js";
import { getNoteAtSemitones, findNoteIndex } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Tool initialized!");
  // Init UI setup and event listeners here
  initUI();
});
