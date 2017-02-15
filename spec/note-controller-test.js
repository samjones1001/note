function checkIfNoteControllerCanBeInstatiated() {
	assert.isTrue(controller = new NoteController());
};

checkIfNoteControllerCanBeInstatiated()


function CheckNoteControllerTakesNewList() {
	var newlist = new NoteList();
	var controller = new NoteController(newlist);
	newlist.AddNote("Favourite drink: Fanta");
	var noteview = new NoteView(newlist);
	noteview.display();
	// assert.isTrue(controller.WebPost() === "<ul><li>Favourite drink: Fanta</li></ul>" );
};

CheckNoteControllerTakesNewList();
