function testingNewDisplay(string){
  note = new Note(string)
  note_to_display = note.displayNote();
  if (note_to_display !== string) {
    throw new Error("It should return book")
  }
}

testingNewDisplay("book");
