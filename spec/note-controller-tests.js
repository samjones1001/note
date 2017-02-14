function ViewDouble() {
	this.displayCallCount === 0;
}

ViewDouble.prototype = {
	viewNotes: function() {
		this.displayCallCount ++;
	} 
}

(function() {
	assert.isTrue(controller = new NoteController())
})();

(function() {
	controller = new NoteController();
	controller._list.addNote("This is a note");
	controller.viewNotes;
	assert.isTrue(ViewDouble.displayCallCount == 1)
})();





