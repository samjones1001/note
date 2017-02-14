(function(exports) {

	function Note(noteText) {
		this._content = noteText;
	}

	exports.Note = Note;

	Note.prototype.getContent = function() {
		return this._content;
	}	

})(this);



