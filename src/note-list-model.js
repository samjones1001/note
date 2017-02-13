(function(exports) {

	function NoteList() {
		this._notes = [];
	}

	NoteList.prototype.getNotes = function() {
		return this._notes
	}

	NoteList.prototype.addNote = function(note_content) {
		this._notes.push(new Note(note_content))
	}

	exports.NoteList = NoteList;

})(this)

