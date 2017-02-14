
(function (exports){

  function NoteList() {
    this._notes = [];
}

function createNote(text) {
  return this._notes.push(new Note(text));
}

function displayNoteList() {
  return this._notes
}
 exports.NoteList = NoteList;
 NoteList.prototype.createNote = createNote;
 NoteList.prototype.displayNoteList = displayNoteList;

}(this));
