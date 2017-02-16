(function(exports) {



  function NoteController(newlist = new NoteList) {
    this._newList = newlist;
    this._view = new NoteView(newlist);
    console.log(this._view)
  }

  NoteController.prototype.WebPost = function() {
    var elem = document.getElementById('app');
    console.log(elem);
      document.body.innerHTML = this._view.display();
  }

  NoteController.prototype.WebURLPost = function() {
    var elem = document.getElementById('app');
    console.log(elem);
    console.log(this._view)
    document.body.innerHTML = this._view.urlDisplay();
  }

  exports.NoteController = NoteController;

})(this);
