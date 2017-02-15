(function(exports) {

  function SingleNoteView(note = new Note()) {
    this.note = note
    this.notes = note.text

  };

  SingleNoteView.prototype.viewNote = function() {
    return  ('<div>' + this.notes + '</div>');
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
