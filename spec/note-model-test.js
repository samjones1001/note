
function readNoteText() {
  var note = new Note("hello");
  assert.isTrue(note.returnNote() === "hello");
};

readNoteText();
