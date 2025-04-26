export const chordFormulas = {
  "Ma7": [0, 4, 7, 11],
  "mi7": [0, 3, 7, 10],
  "7": [0, 4, 7, 10],
  // Add more here...
};

export const guitarChordShapes = {
  "G_Ma7": [
    { string: 6, fret: 3 },
    { string: 5, fret: 2 },
    { string: 4, fret: 0 },
    { string: 3, fret: 0 },
    { string: 2, fret: 0 },
    { string: 1, fret: 2 }
  ]
};

export function showChordOnInstruments(root, chordType) {
  console.log("Showing", root, chordType);
}
