function testingNoteListview(){
  notelist = new NoteList();
  notelist.createNote("Book");
  notelist.createNote("Food");
  notelistview = new NoteListView(notelist);

  if (notelistview.returnHTMLString() !== '<ul><li><div>Book</div></li><li><div><ul><li><div>Food</div></li><li><div>') {
    throw new Error('It should return Book and Food');
  }
}

testingNoteListview();
