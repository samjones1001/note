(function(exports){

  function NoteListView(notelist = new NoteList()){
    this._listToDisplay = notelist._notes;
  }

  NoteListView.prototype.display = function(){
    var output = "";
    this._listToDisplay.forEach(function(note) {
      if (note._content.length > 20) {
        output += "<li>" + note._content.substring(0,20) + "...</li>";
      } else {
        output += "<li>" + note._content + "</li>";
      }
    });
    return ("<ul>" + output + "</ul>");
  }

  exports.NoteListView = NoteListView;

})(this)



