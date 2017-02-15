'use strict';
(function(exports){

  function NoteListView(notelist) {
    this.view = notelist._notes
  }

function returnHTMLString()  {
  var string = "";
  for (var i = 0; i < this.view.length; i++){
    string += '<ul><li><div>' + this.view[i].displayNote() + '</div></li><div>'
  }
return string;
}

exports.NoteListView = NoteListView;
NoteListView.prototype.returnHTMLString = returnHTMLString;

}(this));
