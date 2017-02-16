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

function CheckNoteControllerCanDisplayURLlist() {
	var newlist = new NoteList();
	var controller = new NoteController(newlist);
	newlist.AddNote("thistestsURLlinkdisplay");
	controller.WebURLPost();
	console.log(controller._view.urlDisplay())
	assert.isTrue(document.body.innerHTML !== "<ul><li><a href='http://localhost:8080#notes/0'>thistestsURLlinkdis</a></li></ul>");

};

CheckNoteControllerCanDisplayURLlist();
