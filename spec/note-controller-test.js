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
	assert.isTrue(controller._view.urlDisplay() === "<ul><li><a href='#0'>This string is long</a></li><li><a href='#1'>thistestsURLlinkdis</a></li></ul>");

};

CheckNoteControllerCanDisplayURLlist();


// function ClickLinkChangesPage() {
// 	var newlist = new NoteList();
// 	var controller = new NoteController(newlist);
// 	newlist.AddNote("thistestsURLlinkdisplay");
// 	controller.WebURLPost();
// 	//on click url goes to new page - how to identify link?
//}
