(function() {
	note = new Note("This is a note")
	assert.isTrue(note._content === "This is a note")
})();

(function() {
	note = new Note("This is a note")
	assert.isTrue(note.getContent() === "This is a note")
})();