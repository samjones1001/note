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

   NoteView.prototype.limitedDisplay = function() {
     var limitedResult = '';
     this._listednotes.forEach(function(note) {
       limitedResult += '<li>' + note.text.substring(0,19) + '</li>'
     });
     console.log(limitedResult);
     return ("<ul>" + limitedResult + "</ul>")
    }

  exports.NoteView = NoteView;

})(this);
