(function(exports) {

	function NoteController(list = new NoteList()) {
		this._list = list;
		this._view = new NoteListView(this._list)
		var controller = this;
	};

	NoteController.prototype.viewNotes = function() {
		element = document.getElementById('app')
		element.innerHTML = this._view.display();
	}

	exports.NoteController = NoteController;

	makeUrlChangeShowNoteForCurrentPage()

	function makeUrlChangeShowNoteForCurrentPage() {
		window.addEventListener("hashchange", showNoteForCurrentPage);
	}

	function showNoteForCurrentPage() {
		showNote(getIdFromURL(window.location));
	}

	function getIdFromURL(location) {
		return location.hash.split("#")[1];
	};

	function showNote(id){
		var thisnote = findNote(id);
		view = document.getElementById('view');
		view.innerHTML = new SingleNoteView(thisnote).showNote();
	}

	function findNote(id){
		for (var i=0; i<controller._list._notes.length; i++) {
			if (controller._list._notes[i]._id == id) return controller._list._notes[i] 
		}
	}

})(this);







