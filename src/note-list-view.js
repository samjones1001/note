'use strict';
(function(exports){

  function NoteListView(notelist) {
    this.view = notelist._notes
  }

function returnHTMLString()  {
  var string = "";
  for (var i = 0; i < this.view.length; i++){
  	if (this.view[i].displayNote().length > 20) {
  		string += '<li><div>' + this.view[i].displayNote().substring(0, 20) + '...</div></li>'
  	} else {
  		string += '<li><div>' + this.view[i].displayNote()+ '</div></li>'
  	}    
  }
return "<ul>" + string + "</ul>";
}

exports.NoteListView = NoteListView;
NoteListView.prototype.returnHTMLString = returnHTMLString;

}(this));


