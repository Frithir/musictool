/**
 * Chord formulas and related functions
 */
import { findNoteIndex, getNoteAtSemitones, CHROMATIC_SCALE } from "./utils.js";

export const chordFormulas = {
  Ma7: [0, 4, 7, 11],
  maj7: [0, 4, 7, 11],
  Ma: [0, 4, 7],
  M: [0, 4, 7],
  mi7: [0, 3, 7, 10],
  m7: [0, 3, 7, 10],
  mi: [0, 3, 7],
  m: [0, 3, 7],
  dim7: [0, 3, 6, 9],
  mi7b5: [0, 3, 6, 10],
  7: [0, 4, 7, 10],
  6: [0, 4, 7, 9],
  9: [0, 4, 7, 10, 14],
  13: [0, 4, 7, 10, 14, 21],
  add9: [0, 4, 7, 14],
  sus2: [0, 2, 7],
  sus4: [0, 5, 7],
  "7b9": [0, 4, 7, 10, 13],
  "7alt": [0, 4, 7, 10, 13], // placeholder
  "6#5": [0, 4, 8, 9],
  "Ma7#5": [0, 4, 8, 11],
  Ma7b5: [0, 4, 6, 11],
};

export const guitarChordShapes = {
  G_Ma7: [
    { string: 6, fret: 3 },
    { string: 5, fret: 2 },
    { string: 4, fret: 0 },
    { string: 3, fret: 0 },
    { string: 2, fret: 0 },
    { string: 1, fret: 2 },
  ],
  A_mi7: [
    { string: 6, mute: true },
    { string: 5, fret: 0 },
    { string: 4, fret: 2 },
    { string: 3, fret: 0 },
    { string: 2, fret: 1 },
    { string: 1, fret: 0 },
  ],
};

export const generateChordNotes = (rootNote, chordType) => {
  const formula = chordFormulas[chordType];
  if (!formula) return [];

  const rootIndex = findNoteIndex(rootNote);
  return formula.map((step) => getNoteAtSemitones(rootIndex, step));
};
