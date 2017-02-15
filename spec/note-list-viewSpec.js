function testingNoteListview(){
  notelist = new NoteList();
  notelist.createNote("Book");
  notelist.createNote("Food");
  notelistview = new NoteListView(notelist);

  if (notelistview.returnHTMLString() !== '<ul><li><div>Book</div></li><li><div>Food</div></li></ul>') {
    throw new Error('It should return Book and Food');
  }
}

testingNoteListview();

function testFormattingOfLongNotes(){
	notelist = new NoteList();
	notelist.createNote("This is a very very very long note");
	notelistview = new NoteListView(notelist);

	if (notelistview.returnHTMLString() !== '<ul><li><div>This is a very very ...</div></li></ul>') {
		throw new Error('It should only display the first 20 characters of a note');
	}
}

testFormattingOfLongNotes()