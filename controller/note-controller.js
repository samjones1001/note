(function(exports) {

  function NoteController(notelist = new NoteList()){
    this.notelist = notelist;

  this.view = new NoteListView(this.notelist);

  }

  function getsHtml() {
    document.getElementById('app').innerHTML = this.view.returnHTMLString();
  }

exports.NoteController = NoteController;
NoteController.prototype.getsHtml = getsHtml;

})(this);
