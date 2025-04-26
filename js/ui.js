// ui.js

import { generateScaleNotes } from "./scales.js";
import { chordFormulas, guitarChordShapes } from "./chords.js";
import {
  updateFretboardDisplay,
  updatePianoDisplay,
  showGuitarChordShape,
} from "./instruments.js";

// Function to initialize UI event listeners
export const initializeUI = () => {
  const rootNoteSelect = document.querySelector("#root-note-select");
  const scaleTypeSelect = document.querySelector("#scale-type-select");
  const chordTypeSelect = document.querySelector("#chord-type-select");

  rootNoteSelect.addEventListener("change", handleSelectionChange);
  scaleTypeSelect.addEventListener("change", handleSelectionChange);
  chordTypeSelect.addEventListener("change", handleSelectionChange);
};

// Handler for selection changes
const handleSelectionChange = () => {
  const rootNote = document.querySelector("#root-note-select").value;
  const scaleType = document.querySelector("#scale-type-select").value;
  const chordType = document.querySelector("#chord-type-select").value;

  // Generate scale notes
  const scaleIntervals = getScaleIntervals(scaleType);
  const scaleNotes = generateScaleNotes(rootNote, scaleIntervals);

  // Update instrument displays
  const guitarFretboard = document.querySelector("#guitar-fretboard");
  const piano = document.querySelector("#piano");

  updateFretboardDisplay(guitarFretboard, scaleNotes, rootNote);
  updatePianoDisplay(piano, scaleNotes, rootNote);

  // Display chord shape if available
  const shapeKey = `${rootNote}_${chordType}`;
  const chordShape = guitarChordShapes[shapeKey];
  if (chordShape) {
    showGuitarChordShape(guitarFretboard, chordShape);
  }
};

// Function to retrieve scale intervals based on scale type
const getScaleIntervals = (scaleType) => {
  const scaleFormulas = {
    Major: [0, 2, 4, 5, 7, 9, 11],
    Minor: [0, 2, 3, 5, 7, 8, 10],
    Blues: [0, 3, 5, 6, 7, 10],
    // Add more scale types as needed
  };

  return scaleFormulas[scaleType] || [];
};
