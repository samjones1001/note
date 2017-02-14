'use strict';

function testingNoteList(string){
  noteList = new NoteList();
  note_array = noteList.createNote(new Note(string))
  if (note_array !== 1) {
    throw new Error("It should return an array with note")
  }
}
