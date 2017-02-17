(function(exports) {

  function SingleNoteView(note) {
    this.note = note

  };

  SingleNoteView.prototype.viewNote = function() {
    console.log(this.note)
    return  ('<div>' + this.note.text + '</div>');
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
