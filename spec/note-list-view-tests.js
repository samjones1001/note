

(function() {
  notelist = new NoteList();
  notelist.addNote("any old nonsense");
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul><li>any old nonsense</li><li>more nonsense</li></ul>");
})();

(function() {
  notelist = new NoteList();
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul><li>more nonsense</li></ul>");
})();

(function() {
  notelist = new NoteList();
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul></ul>");
})();
