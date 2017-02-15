function testingNewDisplay(string){
  note = new Note(string)
  note_to_display = note.displayNote();
  if (note_to_display !== string) {
    throw new Error("It should return book")
  }
}

testingNewDisplay("book");

function eachNoteHasAnId(){
	note = new Note("Note 1")
	note2 = new Note ("Note 2")

	if (note2.id !== 2) {
		throw new Error("Each note shoud have a unique ID")
	}
}

eachNoteHasAnId();