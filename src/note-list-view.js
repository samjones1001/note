(function(exports){

  function NoteListView(notelist){
    this._listToDisplay = notelist._notes;
  }

  NoteListView.prototype.display = function(){
    var output = "";
    this._listToDisplay.forEach(function(note) {
      output += "<li>" + note._content.substring(0,20) + "...</li>"
    });

    return ("<ul>" + output + "</ul>");
  }
  exports.NoteListView = NoteListView;

})(this)
