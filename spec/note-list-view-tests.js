

(function() {
  Note.ID_COUNT = 0;
  notelist = new NoteList();
  notelist.addNote("any old nonsense");
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);
  console.log(notelistview.display())
	assert.isTrue(notelistview.display() === "<ul><li><a href='#0'>any old nonsense</a></li><li><a href='#6'>more nonsense</a></li></ul>");
})();

// (function() {
//   notelist = new NoteList();
//   notelist.addNote("more nonsense");
//   notelistview = new NoteListView(notelist);

// 	assert.isTrue(notelistview.display() === "<ul><li>more nonsense</li></ul>");
// })();

// (function() {
//   notelist = new NoteList();
//   notelistview = new NoteListView(notelist);

// 	assert.isTrue(notelistview.display() === "<ul></ul>");
// })();

// (function() {
//   notelist = new NoteList();
//   notelist.addNote("This is an excessively long note")
//   notelistview = new NoteListView(notelist);

//   assert.isTrue(notelistview.display() === "<ul><li>This is an excessive...</li></ul>");
// })();
