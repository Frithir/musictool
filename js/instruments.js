/**
 * Functions for updating instrument displays
 */
import {
  findNoteIndex,
  getNoteAtSemitones,
  GUITAR_TUNING,
  BASS_TUNING,
} from "./utils.js";

// Create piano keyboard
export const createPianoKeyboard = (container) => {
  // Clear existing keyboard
  container.innerHTML = "";

  // Define two octaves of keys (24 keys)
  const keyLayout = [
    { note: "C", type: "white" },
    { note: "C#", type: "black" },
    { note: "D", type: "white" },
    { note: "D#", type: "black" },
    { note: "E", type: "white" },
    { note: "F", type: "white" },
    { note: "F#", type: "black" },
    { note: "G", type: "white" },
    { note: "G#", type: "black" },
    { note: "A", type: "white" },
    { note: "A#", type: "black" },
    { note: "B", type: "white" },
  ];

  // Create two octaves
  for (let octave = 0; octave < 2; octave++) {
    keyLayout.forEach((keyInfo) => {
      const key = document.createElement("div");
      key.classList.add("key", `${keyInfo.type}-key`);
      key.dataset.note = keyInfo.note;

      const label = document.createElement("div");
      label.classList.add("key-label");
      label.textContent = keyInfo.note;
      key.appendChild(label);
      container.appendChild(key);
    });
  }
};

// Create fretboard (guitar or bass)
export const createFretboard = (container, markerContainer, tuning, frets) => {
  // Clear existing fretboard
  container.innerHTML = "";
  markerContainer.innerHTML = "";

  // Create strings
  tuning.forEach((stringNote) => {
    const string = document.createElement("div");
    string.classList.add("string");

    // Create frets for this string
    for (let i = 0; i <= frets; i++) {
      const fret = document.createElement("div");
      fret.classList.add("fret");

      // Calculate the note at this fret
      const noteIndex = findNoteIndex(stringNote);
      const currentNote = getNoteAtSemitones(noteIndex, i);

      const fretNote = document.createElement("div");
      fretNote.classList.add("fret-note");
      fretNote.dataset.note = currentNote;
      fretNote.textContent = i === 0 ? currentNote : "";

      // Add fret dots for guitar/bass markers (3, 5, 7, 9, 12, 15)
      if (
        (i === 3 || i === 5 || i === 7 || i === 9 || i === 15) &&
        ((tuning === GUITAR_TUNING && stringNote === "G") ||
          (tuning === BASS_TUNING && stringNote === "D"))
      ) {
        const dot = document.createElement("div");
        dot.classList.add("fret-dot");
        fret.appendChild(dot);
      }

      // Add double dots at the 12th fret
      if (
        i === 12 &&
        ((tuning === GUITAR_TUNING && stringNote === "G") ||
          (tuning === BASS_TUNING && stringNote === "D"))
      ) {
        const dot1 = document.createElement("div");
        dot1.classList.add("fret-double-dot");
        const dot2 = document.createElement("div");
        dot2.classList.add("fret-double-dot");
        fret.appendChild(dot1);
        fret.appendChild(dot2);
      }

      fret.appendChild(fretNote);
      string.appendChild(fret);
    }

    container.appendChild(string);
  });

  // Create fret markers
  for (let i = 0; i <= frets; i++) {
    const marker = document.createElement("div");
    marker.classList.add("fret-marker");
    marker.textContent = i;
    markerContainer.appendChild(marker);
  }
};
