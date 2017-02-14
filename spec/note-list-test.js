function CheckNoteListIsEmpty() {
  var notelist = new NoteList();
  assert.isEmpty(notelist.GetNotes());
};

CheckNoteListIsEmpty()

function CheckNoteListIsEmpty() {
  var notelist = new NoteList();
  notelist.AddNote("Hello");
  assert.isNotEmpty(notelist.GetNotes());
};

CheckNoteListIsEmpty()
