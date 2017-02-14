

(function() {
  notelist = new NoteList();
  notelist.addNote("any old nonsense");
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul><li>any old nonsense...</li><li>more nonsense...</li></ul>");
})();

(function() {
  notelist = new NoteList();
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul><li>more nonsense...</li></ul>");
})();

(function() {
  notelist = new NoteList();
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul></ul>");
})();

(function() {
  notelist = new NoteList();
  notelist.addNote("This is an excessively long note")
  notelistview = new NoteListView(notelist);

  assert.isTrue(notelistview.display() === "<ul><li>This is an excessive...</li></ul>");
})();
