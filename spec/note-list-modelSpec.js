'use strict';

function testingNoteList(string){
var noteList = new NoteList();
noteList.createNote(new Note(string))

  if (noteList._notes.length !== 1) {
    throw new Error("It should return an array with correct number of elements")
  }
}

testingNoteList("Book");
