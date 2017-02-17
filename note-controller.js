(function(exports) {

  function NoteController(newlist = new NoteList) {
    this._newList = newlist;
    controller = this;
    this._view = new NoteView(newlist);
    this._view._list.AddNote('This string is longER THAN TWENTY CHARS');
  }
  //
  // NoteController.prototype.WebPost = function() {
  //   var elem = document.getElementById('app');
  //   elem.innerHTML = this._view.display();
  // }

  NoteController.prototype.WebURLPost = function() {
    var elem = document.getElementById('app');
    console.log(elem);
    console.log(this._view._list)
    elem.innerHTML = this._view.urlDisplay();
  }

  exports.NoteController = NoteController;

 makeUrlChangeShowNoteForCurrentPage();
 listenForFormSubmit();

  function makeUrlChangeShowNoteForCurrentPage() {
    //adds event listener for hashchange ie. on click
    window.addEventListener("hashchange", showNoteForCurrentPage);
    }

  function showNoteForCurrentPage() {
    publishNote(getIdFromURL(window.location));
  }
  //this goes to URL calls the hash split function

  function getIdFromURL(location) {
  	return location.hash.split("#")[1];
  	};

  function publishNote(id){
    var thisnote = findNote(id);
      console.log(thisnote)
    app = document.getElementById('view');
    app.innerHTML = new SingleNoteView(thisnote).viewNote();

   }

   function findNote(id){
     console.log(controller._view._list.notes.length)

	 	 for (var i=0; i<controller._view._list.notes.length; i++) {
 		    if (controller._view._list.notes[i].id == id) return controller._view._list.notes[i]
        console.log(controller._view._list.notes[i])
      }
 }

 function listenForFormSubmit() {
 	  document.getElementById('text').addEventListener("submit", function(submitEvent) {
 		 console.log(submitEvent.path[0][0].value)
     submitEvent.preventDefault();
 		 controller._newList.AddNote(submitEvent.path[0][0].value);
 		 controller.WebURLPost();
 	  });
 }

})(this);
