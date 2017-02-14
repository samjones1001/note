(function(exports) {

	function SingleNoteView(notetoview) {
		this._currentnote = notetoview;
	};

	SingleNoteView.prototype.showNote = function() {
		return("<div>" + this._currentnote._content + "</div>")
	}

	exports.SingleNoteView = SingleNoteView;

})(this);