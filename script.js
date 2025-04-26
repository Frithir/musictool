document.addEventListener("DOMContentLoaded", function () {
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
  // exported createPianoKeyboard from instruments.js function createPianoKeyboard(container) {
  // Create fretboard (guitar or bass)
  // exported createFretboard from instrunments.js function createFretboard(container, markerContainer, tuning, frets) {

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
