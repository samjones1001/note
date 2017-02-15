(function(exports) {

	var ID_COUNT = 0;

	function Note(noteText) {
		this._content = noteText;
		this._id = ID_COUNT;
		ID_COUNT ++;
	}

	exports.Note = Note;

	Note.prototype.getContent = function() {
		return this._content;
	}	

})(this);



