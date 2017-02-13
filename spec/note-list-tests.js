

(function() {
	notelist = new NoteList();
	assert.isEmpty(notelist.getNotes());
})();

(function() {
	notelist = new NoteList();
	notelist.addNote("this is a note");
	assert.isNotEmpty(notelist.getNotes());
})();
