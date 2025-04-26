export function findNoteIndex(note) {
  return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"].indexOf(note);
}

export function getNoteAtSemitones(startIndex, semitones) {
  const allNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  return allNotes[(startIndex + semitones) % 12];
}
