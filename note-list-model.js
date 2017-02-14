
var NoteList = (function (){

  function NoteList(text) {
    this._notes = [];
}

NoteList.prototype.createNote = function(text){
  return this._notes.push(text );
};

NoteList.prototype.displayList = function() {
return this._notes;
};

return NoteList;

}());
