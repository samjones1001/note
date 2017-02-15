

(function() {
  notelist = new NoteList();
  notelist.addNote("any old nonsense");
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.display() === "<ul><li><a href='#5'>any old nonsense</a></li><li><a href='#6'>more nonsense</a></li></ul>");
})();

(function() {
  notelist = new NoteList();
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.display() === "<ul><li><a href='#7'>more nonsense</a></li></ul>");
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
  assert.isTrue(notelistview.display() === "<ul><li><a href='#8'>This is an excessive...</a></li></ul>");
})();
