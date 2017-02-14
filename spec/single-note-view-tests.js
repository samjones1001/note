(function() {
	assert.isTrue(single = new SingleNoteView())
})();

(function() {
	note = new Note("This is a note");
	singleview = new SingleNoteView(note);
	assert.isTrue(singleview.showNote() === "<div>This is a note</div>")
})();