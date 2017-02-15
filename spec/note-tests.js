(function() {
	note = new Note("This is a note")
	note2 = new Note("This is a note too")
	assert.isTrue(note2._id === 1)
})();

(function() {
	note = new Note("This is a note")
	assert.isTrue(note._content === "This is a note")
})();

(function() {
	note = new Note("This is a note")
	assert.isTrue(note.getContent() === "This is a note")
})();




