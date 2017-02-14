

(function() {
	assert.isTrue(controller = new NoteController())
})();

// (function() {

// 	function ViewDouble() {
// 		this.displayCallCount = 0;

// 	}

// 	ViewDouble.prototype = {
// 		viewNotes: function() {
// 			this.displayCallCount ++;
// 		}
// 	}

// 	viewdouble = new ViewDouble();
// 	controller = new NoteController();
// 	controller._view = viewdouble();
// 	console.log(controller._view)
// 	controller._list.addNote("This is a note");
// 	controller.viewNotes;
// 	assert.isTrue(viewdouble.displayCallCount === 1)
// })();





