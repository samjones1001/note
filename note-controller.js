(function(exports) {



  function NoteController(newlist = new NoteList()) {
    this._newList = newlist;
    this._newListed = this._newList.AddNote("Iron Bru");
    this._view = new NoteView(newlist);
  }

  NoteController.prototype.WebPost = function() {
    var elem = document.getElementById('app');
      document.body.innerHTML = this._view.display();
  }

  exports.NoteController = NoteController;

})(this);
