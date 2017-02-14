(function(exports) {

  function NoteView(list = new NoteList()) {
    this._list = list;
    this._listednotes = list.notes;
  };

  NoteView.prototype.display = function() {
    var result = ''; 
    this._listednotes.forEach(function(note) {
    	result += '<li>' + note.text + '</li>'
    });  
    return ("<ul>" + result + "</ul>")
  }

  exports.NoteView = NoteView;

})(this);
