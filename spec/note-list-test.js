

function CheckNoteListIsEmpty() {
  var notelist = new noteList();
  assert.isEmpty(notelist.GetNotes());
};

function CheckNoteListIsEmpty() {
  var notelist = new noteList();
  notelist.Add("Hello");
  assert.isNotEmpty(notelist.GetNotes());
};
