export const scaleDefinitions = [
  { family: 1, name: "Major (Ionian)", steps: [0, 2, 4, 5, 7, 9, 11], chords: "Ma7" },
  // Add more scales here...
];

export function generateScaleNotes(rootNote, steps, chromaticScales) {
  const chromatic = chromaticScales[rootNote];
  return steps.map(step => chromatic[step]);
}
