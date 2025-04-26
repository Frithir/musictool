/**
 * Utility functions used across modules
 */

// Find the index of a note in the chromatic scale
export const findNoteIndex = (note) => {
  return CHROMATIC_SCALE.indexOf(note);
};

// Get note at a specific number of semitones from C
export const getNoteAtSemitones = (startIndex, semitones) => {
  const adjustedIndex = (startIndex + semitones) % 12;
  return CHROMATIC_SCALE[adjustedIndex];
};

// Define notes for the chromatic scale
export const CHROMATIC_SCALE = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

// Define chromatic scales for all root notes
export const generateChromaticScales = () => {
  const scales = {};

  CHROMATIC_SCALE.forEach((root, index) => {
    const scale = [];
    for (let i = 0; i < 12; i++) {
      scale.push(CHROMATIC_SCALE[(index + i) % 12]);
    }
    scales[root] = scale;
  });

  return scales;
};

// Generate scale notes based on root note and scale pattern
export const generateScaleNotes = (rootNote, scalePattern, chromaticScales) => {
  const chromatic = chromaticScales[rootNote];
  return scalePattern.map((step) => chromatic[step]);
};

// Default tunings
export const GUITAR_TUNING = ["E", "B", "G", "D", "A", "E"]; // High to low
export const BASS_TUNING = ["G", "D", "A", "E"]; // High to low
