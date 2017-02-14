(function(exports) {

	function NoteController(list = new NoteList()) {
		this._list = list;
		this._view = new NoteListView(this._list)
	};

	NoteController.prototype.viewNotes = function() {
		element = document.getElementById('app')
		element.innerHTML = this._view.display();
	}

	exports.NoteController = NoteController;
})(this);
