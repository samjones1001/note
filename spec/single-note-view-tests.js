(function() {
	assert.isTrue(single = new SingleNoteView())
})();

(function() {
	var note = new Note("This is a note");
	var singleview = new SingleNoteView(note);
	assert.isTrue(singleview.showNote === "<div>This is a note</div>")
})();