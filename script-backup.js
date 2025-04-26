document.addEventListener("DOMContentLoaded", function () {
  // Define all scales from the document
  const scaleDefinitions = [
    // Family 1
    {
      family: 1,
      name: "Major (Ionian)",
      intervals: "1-1-½-1-1-1-½",
      systematicName: "Ionian",
      chords: "Ma7",
      steps: [0, 2, 4, 5, 7, 9, 11],
    },
    {
      family: 1,
      name: "Dorian",
      intervals: "1-½-1-1-1-½-1",
      systematicName: "Dorian",
      chords: "mi7",
      steps: [0, 2, 3, 5, 7, 9, 10],
    },
    {
      family: 1,
      name: "Phrygian",
      intervals: "½-1-1-1-½-1-1",
      systematicName: "Phrygian",
      chords: "mi7",
      steps: [0, 1, 3, 5, 7, 8, 10],
    },
    {
      family: 1,
      name: "Lydian",
      intervals: "1-1-1-½-1-1-½",
      systematicName: "Lydian",
      chords: "Ma7",
      steps: [0, 2, 4, 6, 7, 9, 11],
    },
    {
      family: 1,
      name: "Mixolydian",
      intervals: "1-1-½-1-1-½-1",
      systematicName: "Mixolydian",
      chords: "7",
      steps: [0, 2, 4, 5, 7, 9, 10],
    },
    {
      family: 1,
      name: "Natural Minor (Aeolian)",
      intervals: "1-½-1-1-½-1-1",
      systematicName: "Aeolian",
      chords: "mi7",
      steps: [0, 2, 3, 5, 7, 8, 10],
    },
    {
      family: 1,
      name: "Locrian",
      intervals: "½-1-1-½-1-1-1",
      systematicName: "Locrian",
      chords: "mi7b5",
      steps: [0, 1, 3, 5, 6, 8, 10],
    },

    // Family 2
    {
      family: 2,
      name: "Altered (Super Locrian)",
      intervals: "½-1-½-1-1-1-1",
      systematicName: "Ionian #1",
      chords: "7alt / mi7b5",
      steps: [0, 1, 3, 4, 6, 8, 10],
    },
    {
      family: 2,
      name: "Ascending Melodic Minor",
      intervals: "1-½-1-1-1-1-½",
      systematicName: "Dorian #7",
      chords: "miMa7",
      steps: [0, 2, 3, 5, 7, 9, 11],
    },
    {
      family: 2,
      name: "Dorian b2",
      intervals: "½-1-1-1-1-½-1",
      systematicName: "Phrygian #6",
      chords: "mi7",
      steps: [0, 1, 3, 5, 7, 9, 10],
    },
    {
      family: 2,
      name: "Lydian Augmented",
      intervals: "1-1-1-1-½-1-½",
      systematicName: "Lydian #5",
      chords: "Ma7#5",
      steps: [0, 2, 4, 6, 8, 9, 11],
    },
    {
      family: 2,
      name: "Lydian Dominant",
      intervals: "1-1-1-½-1-½-1",
      systematicName: "Mixolydian #4",
      chords: "7",
      steps: [0, 2, 4, 6, 7, 9, 10],
    },
    {
      family: 2,
      name: "Aeolian Dominant",
      intervals: "1-1-½-1-½-1-1",
      systematicName: "Aeolian #3",
      chords: "7",
      steps: [0, 2, 4, 5, 7, 8, 10],
    },
    {
      family: 2,
      name: "Half Diminished",
      intervals: "1-½-1-½-1-1-1",
      systematicName: "Locrian #2",
      chords: "mi7b5",
      steps: [0, 2, 3, 5, 6, 8, 10],
    },

    // Family 3
    {
      family: 3,
      name: "Major #5 (Major Augmented)",
      intervals: "1-1-½-1½-½-1-½",
      systematicName: "Ionian #5",
      chords: "Ma7#5",
      steps: [0, 2, 4, 5, 8, 9, 11],
    },
    {
      family: 3,
      name: "Dorian #4",
      intervals: "1-½-1½-½-1-½-1",
      systematicName: "Dorian #4",
      chords: "mi7",
      steps: [0, 2, 3, 6, 7, 9, 10],
    },
    {
      family: 3,
      name: "Phrygian Dominant",
      intervals: "½-1½-½-1-½-1-1",
      systematicName: "Phrygian #3",
      chords: "7",
      steps: [0, 1, 4, 5, 7, 8, 10],
    },
    {
      family: 3,
      name: "Lydian #2",
      intervals: "1½-½-1-½-1-1-½",
      systematicName: "Lydian #2",
      chords: "Ma7",
      steps: [0, 3, 4, 6, 7, 9, 11],
    },
    {
      family: 3,
      name: "Altered Dominant bb7",
      intervals: "½-1-½-1-1-½-1½",
      systematicName: "Mixolydian #1",
      chords: "dim7",
      steps: [0, 1, 3, 4, 6, 7, 10],
    },
    {
      family: 3,
      name: "Harmonic Minor",
      intervals: "1-½-1-1-½-1½-½",
      systematicName: "Aeolian #7",
      chords: "miMa7",
      steps: [0, 2, 3, 5, 7, 8, 11],
    },
    {
      family: 3,
      name: "Locrian ♮6",
      intervals: "½-1-1-½-1½-½-1",
      systematicName: "Locrian #6",
      chords: "mi7b5",
      steps: [0, 1, 3, 5, 6, 9, 10],
    },

    // Family 4
    {
      family: 4,
      name: "Harmonic Major",
      intervals: "1-1-½-1-½-1½-½",
      systematicName: "Ionian b6",
      chords: "Ma7",
      steps: [0, 2, 4, 5, 7, 8, 11],
    },
    {
      family: 4,
      name: "Dorian b5",
      intervals: "1-½-1-½-1½-½-1",
      systematicName: "Dorian b5",
      chords: "mi7b5",
      steps: [0, 2, 3, 5, 6, 9, 10],
    },
    {
      family: 4,
      name: "Phrygian b4",
      intervals: "½-1-½-1½-½-1-1",
      systematicName: "Phrygian b4",
      chords: "mi7 / 7",
      steps: [0, 1, 3, 4, 7, 8, 10],
    },
    {
      family: 4,
      name: "Lydian b3",
      intervals: "1-½-1½-½-1-1-½",
      systematicName: "Lydian b3",
      chords: "miMa7",
      steps: [0, 2, 3, 6, 7, 9, 11],
    },
    {
      family: 4,
      name: "Mixolydian b2",
      intervals: "½-1½-½-1-1-½-1",
      systematicName: "Mixolydian b2",
      chords: "7",
      steps: [0, 1, 4, 5, 7, 9, 10],
    },
    {
      family: 4,
      name: "Lydian Augmented #2",
      intervals: "1½-½-1-1-½-1-½",
      systematicName: "Aeolian b1",
      chords: "Ma7#5 / dim7",
      steps: [0, 3, 4, 6, 8, 9, 11],
    },
    {
      family: 4,
      name: "Locrian bb7",
      intervals: "½-1-1-½-1-½-1½",
      systematicName: "Locrian b7",
      chords: "dim7",
      steps: [0, 1, 3, 5, 6, 8, 10],
    },

    // Family 5
    {
      family: 5,
      name: "Diminished",
      intervals: "1-½-1-½-1-½-1-½",
      systematicName: "Diminished",
      chords: "dim7",
      steps: [0, 2, 3, 5, 6, 8, 9, 11],
    },
    {
      family: 5,
      name: "Dominant Diminished",
      intervals: "½-1-½-1-½-1-½-1",
      systematicName: "Inverted Diminished",
      chords: "7",
      steps: [0, 1, 3, 4, 6, 7, 9, 10],
    },

    // Family 6
    {
      family: 6,
      name: "Whole Tone",
      intervals: "1-1-1-1-1-1",
      systematicName: "Whole Tone",
      chords: "7 #5/b5",
      steps: [0, 2, 4, 6, 8, 10],
    },

    // Family 7
    {
      family: 7,
      name: "Augmented",
      intervals: "1½-½-1½-½-1½-½",
      systematicName: "Augmented",
      chords: "Ma7",
      steps: [0, 3, 4, 7, 8, 11],
    },
    {
      family: 7,
      name: "Inverted Augmented",
      intervals: "½-1½-½-1½-½-1½",
      systematicName: "Inverted Augmented",
      chords: "6#5",
      steps: [0, 1, 4, 5, 8, 9],
    },

    // Family 8: Pentatonic Scales (great for jazz, funk, soul, reggae)
    {
      family: 8,
      name: "Major Pentatonic",
      intervals: "1-1-1½-1-1½",
      systematicName: "Major Pentatonic",
      chords: "Ma7, 6, add9",
      steps: [0, 2, 4, 7, 9],
    },
    {
      family: 8,
      name: "Minor Pentatonic",
      intervals: "1½-1-1-1½-1",
      systematicName: "Minor Pentatonic",
      chords: "mi7, mi6",
      steps: [0, 3, 5, 7, 10],
    },
    {
      family: 8,
      name: "Egyptian Pentatonic",
      intervals: "1-1½-1-1½-1",
      systematicName: "Suspended Pentatonic",
      chords: "sus4, 7sus4",
      steps: [0, 2, 5, 7, 10],
    },
    {
      family: 8,
      name: "Blues Major Pentatonic",
      intervals: "1-1½-½-1½-1",
      systematicName: "Major Blues",
      chords: "Ma7, 6, 9",
      steps: [0, 2, 5, 6, 9],
    },
    {
      family: 8,
      name: "Ritusen Pentatonic",
      intervals: "1-1-1½-1-1½",
      systematicName: "Ritusen",
      chords: "sus2, add9",
      steps: [0, 2, 4, 7, 9],
    },

    // Family 9: Blues Scales (essential for jazz, funk, soul)
    {
      family: 9,
      name: "Minor Blues",
      intervals: "1½-1-½-½-1½-1",
      systematicName: "Minor Blues",
      chords: "mi7, 7",
      steps: [0, 3, 5, 6, 7, 10],
    },
    {
      family: 9,
      name: "Major Blues",
      intervals: "1-½-½-1½-1-1½",
      systematicName: "Major Blues",
      chords: "Ma7, 6, 9",
      steps: [0, 2, 3, 4, 7, 9],
    },
    {
      family: 9,
      name: "Dominant Blues",
      intervals: "1-1-½-½-1½-1",
      systematicName: "Mixolydian Blues",
      chords: "7, 9, 13",
      steps: [0, 2, 4, 5, 6, 9],
    },

    // Family 10: World/Modal Scales (great for EDM, world fusion)
    {
      family: 10,
      name: "Hirajoshi",
      intervals: "1-½-1½-½-2",
      systematicName: "Japanese Hirajoshi",
      chords: "mi, miMa7",
      steps: [0, 2, 3, 7, 8],
    },
    {
      family: 10,
      name: "In-Sen",
      intervals: "½-2-½-2-1",
      systematicName: "Japanese In-Sen",
      chords: "mi7b5",
      steps: [0, 1, 5, 6, 10],
    },
    {
      family: 10,
      name: "Iwato",
      intervals: "½-2-½-2-1",
      systematicName: "Japanese Iwato",
      chords: "dim7",
      steps: [0, 1, 5, 6, 10],
    },
    {
      family: 10,
      name: "Spanish Phrygian",
      intervals: "½-1½-½-1-½-1-1",
      systematicName: "Phrygian Dominant",
      chords: "7, 7b9",
      steps: [0, 1, 4, 5, 7, 8, 10],
    },
    {
      family: 10,
      name: "Hungarian Minor",
      intervals: "1-½-1½-½-½-1½-½",
      systematicName: "Double Harmonic Minor",
      chords: "miMa7, 7b9",
      steps: [0, 2, 3, 6, 7, 8, 11],
    },
    {
      family: 10,
      name: "Arabian",
      intervals: "½-1½-½-½-1½-½-1",
      systematicName: "Double Harmonic Major",
      chords: "Ma7, 7b9",
      steps: [0, 1, 4, 5, 7, 8, 11],
    },

    // Family 11: Jazz/Fusion Scales (for advanced jazz and fusion)
    {
      family: 11,
      name: "Bebop Dominant",
      intervals: "1-1-½-1-1-½-½-½",
      systematicName: "Mixolydian Bebop",
      chords: "7, 9, 13",
      steps: [0, 2, 4, 5, 7, 9, 10, 11],
    },
    {
      family: 11,
      name: "Bebop Major",
      intervals: "1-1-½-1-½-½-1-½",
      systematicName: "Ionian Bebop",
      chords: "Ma7, 6, 9",
      steps: [0, 2, 4, 5, 7, 8, 9, 11],
    },
    {
      family: 11,
      name: "Bebop Minor",
      intervals: "1-½-1-1-½-½-1-½",
      systematicName: "Dorian Bebop",
      chords: "mi7, mi6",
      steps: [0, 2, 3, 5, 7, 8, 9, 11],
    },
    {
      family: 11,
      name: "Bebop Locrian",
      intervals: "½-1-1-½-1-½-½-1",
      systematicName: "Locrian Bebop",
      chords: "mi7b5",
      steps: [0, 1, 3, 5, 6, 8, 9, 10],
    },

    // Family 12: Funk & Soul Scales (essential for funk, soul, R&B)
    {
      family: 12,
      name: "Funk Minor",
      intervals: "1½-½-½-1-½-1-1",
      systematicName: "Funk Dorian",
      chords: "mi7, 9, 13",
      steps: [0, 3, 4, 5, 7, 8, 10],
    },
    {
      family: 12,
      name: "Gospel Pentatonic",
      intervals: "1-1-1½-½-2",
      systematicName: "Gospel",
      chords: "Ma7, 9, 13",
      steps: [0, 2, 4, 7, 8],
    },
    {
      family: 12,
      name: "Mixo-Dorian",
      intervals: "1-½-1-1-1-½-1",
      systematicName: "Mixo-Dorian Hybrid",
      chords: "7, 9, 13",
      steps: [0, 2, 3, 5, 7, 9, 10],
    },

    // Family 13: Electronic & Modern Scales (for EDM and modern music)
    {
      family: 13,
      name: "Hexatonic",
      intervals: "1-1-1-1-1-1",
      systematicName: "Whole Tone",
      chords: "7#11, 7#5",
      steps: [0, 2, 4, 6, 8, 10],
    },
    {
      family: 13,
      name: "Prometheus",
      intervals: "1-1-1-1½-½-1",
      systematicName: "Prometheus",
      chords: "Ma7#11, 9",
      steps: [0, 2, 4, 6, 9, 10],
    },
    {
      family: 13,
      name: "Enigmatic",
      intervals: "½-1½-1-1-1-½-½",
      systematicName: "Enigmatic",
      chords: "Ma7b5",
      steps: [0, 1, 4, 6, 8, 10, 11],
    },
    {
      family: 13,
      name: "Ultralocrian",
      intervals: "½-1-½-1-½-1-1",
      systematicName: "Altered Dominant",
      chords: "7alt",
      steps: [0, 1, 3, 4, 6, 7, 9],
    },
  ];
  // Define notes for all chromatic scales
  const chromaticScales = {
    C: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    "C#": ["C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"],
    D: ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"],
    "D#": ["D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
    E: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"],
    F: ["F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
    "F#": ["F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F"],
    G: ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#"],
    "G#": ["G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
    A: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    "A#": ["A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
    B: ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"],
  };

  const familyChordTypes = {
    1: ["Ma7", "mi7", "7"],
    2: ["miMa7", "mi7b5", "7"],
    3: ["miMa7", "7", "dim7"],
    4: ["Ma7", "7", "mi7b5"],
    5: ["dim7", "mi7b5"],
    6: ["7", "Ma7#5"],
    7: ["Ma7#5", "6#5"],
    8: ["Ma7", "mi7", "add9", "sus4", "sus2"],
    9: ["mi7", "7", "9", "13"],
    10: ["mi7b5", "miMa7", "dim7"],
    11: ["Ma7", "mi7", "mi9", "9", "13", "7b9"],
    12: ["mi7", "9", "13", "6", "6/9"],
    13: ["Ma7#5", "7alt", "dim7"],
  };

  const guitarChordShapes = {
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

  // Define default tunings for guitar and bass
  const guitarTuning = ["E", "B", "G", "D", "A", "E"]; // High to low
  const bassTuning = ["G", "D", "A", "E"]; // High to low

  // Get DOM elements
  const rootNoteSelect = document.getElementById("root-note");
  const scaleFamilySelect = document.getElementById("scale-family");
  const scaleSelect = document.getElementById("scale-select");
  const currentScaleName = document.getElementById("current-scale-name");
  const scaleIntervalPattern = document.getElementById(
    "scale-interval-pattern"
  );
  const scaleNotes = document.getElementById("scale-notes");
  const scaleChords = document.getElementById("scale-chords");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const instrumentDisplays = document.querySelectorAll(".instrument");

  // Create piano keyboard
  const pianoContainer = document.querySelector(".piano");
  createPianoKeyboard(pianoContainer);

  // Create guitar fretboard
  const guitarFretboard = document.querySelector("#guitar-display .fretboard");
  const guitarFretMarkers = document.querySelector(
    "#guitar-display .fret-markers"
  );
  createFretboard(guitarFretboard, guitarFretMarkers, guitarTuning, 15);

  // Create bass fretboard
  const bassFretboard = document.querySelector("#bass-display .fretboard");
  const bassFretMarkers = document.querySelector("#bass-display .fret-markers");
  createFretboard(bassFretboard, bassFretMarkers, bassTuning, 15);

  // Populate scale select based on family
  function populateScaleSelect(family = "all") {
    // Clear current options
    scaleSelect.innerHTML = "";

    // Filter scales by selected family
    let scales =
      family === "all"
        ? scaleDefinitions
        : scaleDefinitions.filter((scale) => scale.family === parseInt(family));

    // Add options for each scale
    scales.forEach((scale) => {
      const option = document.createElement("option");
      option.value = `${scale.family}-${scale.name}`;
      option.textContent = scale.name;
      scaleSelect.appendChild(option);
    });

    // Trigger change to update display
    scaleSelect.dispatchEvent(new Event("change"));
  }

  // Create piano keyboard
  function createPianoKeyboard(container) {
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
  }

  // Create fretboard (guitar or bass)
  function createFretboard(container, markerContainer, tuning, frets) {
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
          ((tuning === guitarTuning && stringNote === "G") ||
            (tuning === bassTuning && stringNote === "D"))
        ) {
          const dot = document.createElement("div");
          dot.classList.add(
            "fret-dot",
            tuning === guitarTuning ? "guitar" : "bass"
          );

          fret.appendChild(dot);
        }

        // Add double dots at the 12th fret
        if (
          i === 12 &&
          ((tuning === guitarTuning && stringNote === "G") ||
            (tuning === bassTuning && stringNote === "D"))
        ) {
          const dot1 = document.createElement("div");
          dot1.classList.add(
            "fret-double-dot",
            tuning === guitarTuning ? "guitar" : "bass"
          );
          const dot2 = document.createElement("div");
          dot2.classList.add(
            "fret-double-dot",
            tuning === guitarTuning ? "guitar" : "bass"
          );
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
  }

  // Find the index of a note in the chromatic scale
  function findNoteIndex(note) {
    return chromaticScales["C"].indexOf(note);
  }

  // Get note at a specific number of semitones from C
  function getNoteAtSemitones(startIndex, semitones) {
    const allNotes = chromaticScales["C"];
    const adjustedIndex = (startIndex + semitones) % 12;
    return allNotes[adjustedIndex];
  }

  // Generate scale notes based on root note and scale pattern
  function generateScaleNotes(rootNote, scalePattern) {
    const chromatic = chromaticScales[rootNote];
    return scalePattern.map((step) => chromatic[step]);
  }

  // Update the scale display
  function updateScaleDisplay() {
    // Reset to scale view when new scale is chosen
    document
      .querySelectorAll(".chord-buttons button")
      .forEach((b) => b.classList.remove("active"));

    const rootNote = rootNoteSelect.value;
    const selectedScaleValue = scaleSelect.value;

    // Find the selected scale definition
    if (!selectedScaleValue) {
      resetDisplay();
      return;
    }

    const [familyId, ...nameParts] = selectedScaleValue.split("-");
    const scaleName = nameParts.join("-");

    const selectedScale = scaleDefinitions.find(
      (scale) => scale.family === parseInt(familyId) && scale.name === scaleName
    );

    if (!selectedScale) {
      resetDisplay();
      return;
    }

    // Generate scale notes
    const scaleNotesArray = generateScaleNotes(rootNote, selectedScale.steps);

    // Update scale info
    currentScaleName.textContent = `${rootNote} ${selectedScale.name}`;
    scaleIntervalPattern.textContent = `Intervals: ${selectedScale.intervals}`;
    scaleNotes.textContent = `Notes: ${scaleNotesArray.join(", ")}`;
    scaleChords.textContent = `Chords: ${selectedScale.chords}`;

    // Update piano display
    updatePianoDisplay(scaleNotesArray, rootNote);

    // Update guitar display
    updateFretboardDisplay(
      document.querySelector("#guitar-display .fretboard"),
      scaleNotesArray,
      rootNote
    );

    // Update bass display
    updateFretboardDisplay(
      document.querySelector("#bass-display .fretboard"),
      scaleNotesArray,
      rootNote
    );

    // Display chord buttons based on scale family
    const chordButtonContainer = document.getElementById("chord-buttons");
    scaleChords.textContent = `Chords: ${selectedScale.chords}`;
    chordButtonContainer.innerHTML = "";

    const validChords = familyChordTypes[selectedScale.family] || [];
    validChords.forEach((chord) => {
      const btn = document.createElement("button");
      btn.textContent = chord;
      btn.addEventListener("click", () => {
        const isActive = btn.classList.contains("active");

        document
          .querySelectorAll(".chord-buttons button")
          .forEach((b) => b.classList.remove("active"));

        if (isActive) {
          updateScaleDisplay(); // toggle off
        } else {
          btn.classList.add("active");
          showChordOnInstruments(rootNoteSelect.value, chord);
        }
      });
      chordButtonContainer.appendChild(btn);
    });
  }

  // Reset the display when no scale is selected
  function resetDisplay() {
    currentScaleName.textContent = "Select a scale";
    scaleIntervalPattern.textContent = "";
    scaleNotes.textContent = "";
    scaleChords.textContent = "";

    clearInstrumentDisplays();
  }

  // Clear highlighting on all instrument displays
  function clearInstrumentDisplays() {
    // Clear piano
    document.querySelectorAll(".piano .key").forEach((key) => {
      key.classList.remove("scale-note", "root-note");
    });

    // Clear guitar
    document.querySelectorAll("#guitar-display .fret-note").forEach((note) => {
      note.classList.remove("scale-note", "root-note");
      if (
        !note.parentElement.querySelector(".fret-dot") &&
        !note.parentElement.querySelector(".fret-double-dot")
      ) {
        note.textContent = "";
      }
    });

    // Clear bass
    document.querySelectorAll("#bass-display .fret-note").forEach((note) => {
      note.classList.remove("scale-note", "root-note");
      if (
        !note.parentElement.querySelector(".fret-dot") &&
        !note.parentElement.querySelector(".fret-double-dot")
      ) {
        note.textContent = "";
      }
    });
  }

  // Update piano display with scale notes
  function updatePianoDisplay(scaleNotes, rootNote) {
    const keys = document.querySelectorAll(".piano .key");
    let foundRoot = false;
    let noteCount = 0;

    keys.forEach((key) => {
      const note = key.dataset.note;
      key.classList.remove("scale-note", "root-note", "outside-scale");

      // Wait until root is found
      if (!foundRoot && note === rootNote) {
        foundRoot = true;
      }

      if (
        foundRoot &&
        scaleNotes.includes(note) &&
        noteCount < scaleNotes.length
      ) {
        key.classList.add("scale-note");
        key.textContent = note;
        if (note === rootNote) key.classList.add("root-note");
        noteCount++;
      } else {
        key.textContent = "";
      }
    });
  }

  // Update fretboard display (guitar or bass)
  function updateFretboardDisplay(fretboard, scaleNotes, rootNote) {
    // Reset all notes
    fretboard.querySelectorAll(".fret-note").forEach((noteEl) => {
      const note = noteEl.dataset.note;
      const fret = [...noteEl.parentElement.parentElement.children].indexOf(
        noteEl.parentElement
      );

      noteEl.classList.remove("scale-note", "root-note", "outside-scale");

      // Keep open string note label
      if (fret === 0) {
        noteEl.textContent = note;
      } else {
        noteEl.textContent = "";
      }

      // Limit display to 1st octave range (fret 0–12)
      if (fret > 12) return;

      // Highlight scale notes
      if (scaleNotes.includes(note)) {
        noteEl.classList.add("scale-note");
        noteEl.textContent = note;

        if (note === rootNote) {
          noteEl.classList.add("root-note");
        }
      }
    });
  }

  // Event listeners
  rootNoteSelect.addEventListener("change", updateScaleDisplay);
  scaleSelect.addEventListener("change", updateScaleDisplay);

  scaleFamilySelect.addEventListener("change", function () {
    populateScaleSelect(this.value);
  });

  // Tab switching
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active tab button
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Show corresponding instrument display
      const tabName = this.dataset.tab;
      instrumentDisplays.forEach((display) => {
        display.classList.remove("active");
        if (display.id === `${tabName}-display`) {
          display.classList.add("active");
        }
      });
    });
  });

  // Initialize the scale selection
  populateScaleSelect();

  const chordFormulas = {
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

  function showChordOnInstruments(root, chordType) {
    const formula = chordFormulas[chordType];
    if (!formula) {
      alert(`Chord type ${chordType} not recognized yet`);
      return;
    }

    const rootIndex = chromaticScales["C"].indexOf(root);
    const chordNotes = formula.map((step) =>
      getNoteAtSemitones(rootIndex, step)
    );

    // Update piano and fretboards with chord notes
    updatePianoDisplay(chordNotes, root);

    const shapeKey = `${root}_${chordType}`;
    const shape = guitarChordShapes[shapeKey];
    if (shape) {
      showGuitarChordShape(shape);
    } else {
      // fallback: highlight all chord notes
      updateFretboardDisplay(guitarFretboard, chordNotes, root);
    }

    updateFretboardDisplay(
      document.querySelector("#bass-display .fretboard"),
      chordNotes,
      root
    );
  }

  function showGuitarChordShape(shape) {
    const fretboard = document.querySelector("#guitar-display .fretboard");
    fretboard.querySelectorAll(".fret-note").forEach((noteEl) => {
      noteEl.classList.remove("scale-note", "root-note");
      noteEl.textContent = "";
    });

    shape.forEach((pos, i) => {
      if (pos.mute) return;

      const stringIndex = 6 - pos.string;
      const string = fretboard.children[stringIndex];
      const fret = string.children[pos.fret];

      const note = fret.querySelector(".fret-note");
      if (note) {
        note.classList.add("scale-note");
        note.textContent = note.dataset.note;
      }
    });
  }

  // Musical notation related functions
  function createNotation() {
    // Get DOM elements for notation
    const notationTabButtons = document.querySelectorAll(".notation-tab-btn");
    const trebleNotesContainer = document.getElementById("treble-notes");
    const bassNotesContainer = document.getElementById("bass-notes");

    // Note positions relative to the staff lines (in pixels)
    // Middle C is at 0px from center, each step (line or space) is 6.4px
    const notePositions = {
      C: 32, // C4 (middle C)
      "C#": 32,
      D: 25.6,
      "D#": 25.6,
      E: 19.2,
      F: 12.8,
      "F#": 12.8,
      G: 6.4,
      "G#": 6.4,
      A: 0,
      "A#": 0,
      B: -6.4,
      C2: -12.8,
      "C#2": -12.8,
      D2: -19.2,
      "D#2": -19.2,
      E2: -25.6,
      F2: -32,
      "F#2": -32,
    };

    const bassPositions = {
      C: 76.8, // C3
      "C#": 76.8,
      D: 70.4,
      "D#": 70.4,
      E: 64,
      F: 57.6,
      "F#": 57.6,
      G: 51.2,
      "G#": 51.2,
      A: 44.8,
      "A#": 44.8,
      B: 38.4,
      C2: 32,
      "C#2": 32,
      D2: 25.6,
      "D#2": 25.6,
      E2: 19.2,
      F2: 12.8,
      "F#2": 12.8,
    };

    // Tab switching for notation
    notationTabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Update active tab button
        notationTabButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Update notation display (if scale is selected)
        updateNotation();
      });
    });

    // Function to update notation with scale notes
    function updateNotation() {
      // Clear current notes
      trebleNotesContainer.innerHTML = "";
      bassNotesContainer.innerHTML = "";

      const rootNote = document.getElementById("root-note").value;
      const selectedScaleValue = document.getElementById("scale-select").value;
      const direction = document.querySelector(".notation-tab-btn.active")
        .dataset.notation;

      // Don't continue if no scale is selected
      if (!selectedScaleValue) return;

      // Get the selected scale
      const [familyId, ...nameParts] = selectedScaleValue.split("-");
      const scaleName = nameParts.join("-");

      const selectedScale = scaleDefinitions.find(
        (scale) =>
          scale.family === parseInt(familyId) && scale.name === scaleName
      );

      if (!selectedScale) return;

      // Generate scale notes
      let scaleNotesArray = generateScaleNotes(rootNote, selectedScale.steps);

      // Get a second octave for scales with less than 8 notes
      if (scaleNotesArray.length < 8) {
        const chromaticScale = chromaticScales[rootNote];
        const rootIndex = chromaticScale.indexOf(rootNote);
        const octaveUp = chromaticScale[rootIndex];
        scaleNotesArray.push(octaveUp);
      }

      // Handle descending direction
      if (direction === "descending") {
        scaleNotesArray = [...scaleNotesArray].reverse();
      }

      // Create notes on the staff
      drawNotesOnStaff(
        trebleNotesContainer,
        scaleNotesArray,
        notePositions,
        rootNote
      );
      drawNotesOnStaff(
        bassNotesContainer,
        scaleNotesArray,
        bassPositions,
        rootNote
      );
    }

    // Function to draw notes on a staff
    function drawNotesOnStaff(container, notes, positions, rootNote) {
      notes.forEach((note, index) => {
        // For the octave up notes (beyond 7th note)
        let notePos = positions[note];
        let noteToUse = note;

        // Handle octave up for certain notes
        if (index >= 7 && note === rootNote) {
          noteToUse = note + "2";
          notePos = positions[noteToUse] || positions[note];
        }

        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        if (note === rootNote && index === 0) {
          noteElement.classList.add("root-note");
        }

        // Position the note on the staff
        noteElement.style.left = 60 + index * 40 + "px";
        noteElement.style.top = "calc(50% - " + notePos + "px)";

        // Add sharp/flat if needed
        if (note.includes("#")) {
          const accidental = document.createElement("span");
          accidental.classList.add("accidental");
          accidental.textContent = "♯";
          noteElement.appendChild(accidental);
        }

        // Add ledger lines if needed
        addLedgerLines(noteElement, notePos);

        container.appendChild(noteElement);
      });
    }

    // Add ledger lines for notes that are off the staff
    function addLedgerLines(noteElement, position) {
      // Add ledger lines above the staff (very high notes)
      if (position <= -40) {
        const ledgerLine = document.createElement("div");
        ledgerLine.classList.add("ledger-line");
        ledgerLine.style.top = "0px";
        noteElement.appendChild(ledgerLine);
      }

      if (position <= -24) {
        const ledgerLine = document.createElement("div");
        ledgerLine.classList.add("ledger-line");
        ledgerLine.style.top = "16px";
        noteElement.appendChild(ledgerLine);
      }

      // Add middle C ledger line for treble clef
      if (position === 32) {
        const ledgerLine = document.createElement("div");
        ledgerLine.classList.add("ledger-line");
        ledgerLine.style.top = "32px";
        noteElement.appendChild(ledgerLine);
      }

      // Add ledger lines below the staff (very low notes)
      if (position >= 40) {
        const ledgerLine = document.createElement("div");
        ledgerLine.classList.add("ledger-line");
        ledgerLine.style.top = "64px";
        noteElement.appendChild(ledgerLine);
      }
    }

    // Hook into the main updateScaleDisplay function
    const originalUpdateScaleDisplay = updateScaleDisplay;
    window.updateScaleDisplay = function () {
      originalUpdateScaleDisplay();
      updateNotation();
    };

    // Initialize notation
    updateNotation();
  }

  // Create notation when DOM is loaded
  createNotation();

  // Populate chord types in explore dropdown
  const exploreChordSelect = document.getElementById("explore-chord");
  const exploreBtn = document.getElementById("explore-show-btn");

  Object.keys(chordFormulas).forEach((type) => {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    exploreChordSelect.appendChild(opt);
  });

  // Show chord on button click
  exploreBtn.addEventListener("click", () => {
    const root = rootNoteSelect.value;
    const type = exploreChordSelect.value;

    if (root && type) {
      // Reset any active chord buttons
      document
        .querySelectorAll(".chord-buttons button")
        .forEach((b) => b.classList.remove("active"));

      showChordOnInstruments(root, type);
    }
  });

  function showChordOnInstruments(root, chordType, scaleNotesInContext = []) {
    const formula = chordFormulas[chordType];
    if (!formula) return;

    const rootIndex = chromaticScales["C"].indexOf(root);
    const chordNotes = formula.map((step) =>
      getNoteAtSemitones(rootIndex, step)
    );

    // Show info text
    const info = document.getElementById("explore-chord-info");
    info.innerHTML = `
      <strong>${root} ${chordType}</strong><br>
      Formula: ${formula.join("-")}<br>
      Notes: ${chordNotes.join(", ")}<br>
      ${
        scaleNotesInContext.length
          ? `Chord tones <span style="color:green">in scale</span>, others <span style="color:gray">highlighted</span>.`
          : ""
      }
    `;

    // Update instruments with scale awareness
    updateInstrumentWithChord(chordNotes, root, scaleNotesInContext);
  }

  function updateInstrumentWithChord(chordNotes, rootNote, scaleNotes = []) {
    const isInScale = (note) => scaleNotes.includes(note);

    const update = (containerSelector) => {
      const notes = document.querySelectorAll(
        `${containerSelector} .fret-note, ${containerSelector} .key`
      );
      notes.forEach((el) => {
        el.classList.remove("scale-note", "root-note", "outside-scale");
        const note = el.dataset.note;
        if (chordNotes.includes(note)) {
          el.classList.add("scale-note");
          if (note === rootNote) el.classList.add("root-note");
          if (scaleNotes.length && !isInScale(note)) {
            el.classList.add("outside-scale");
          }
          el.textContent = note;
        } else {
          el.textContent = "";
        }
      });
    };

    update(".piano");
    update("#guitar-display");
    update("#bass-display");
  }

  document.getElementById("explore-reset-btn").addEventListener("click", () => {
    // Clear select values
    exploreChordSelect.value = "";
    // Clear chord info
    document.getElementById("explore-chord-info").innerHTML = "";

    // Reset to scale view
    updateScaleDisplay();
  });
});
