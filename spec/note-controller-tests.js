function checkIfNoteControllerCanBeInstatiated() {
	assert.isTrue(controller = new NoteController());
};

checkIfNoteControllerCanBeInstatiated();

// function displayANoteWhenClicked() {
// 	view = document.getElementById('view')
// 	controller = new NoteController();
// 	controller._list.addNote("This is a note");
// 	assert.isTrue(view.innerHTML === "This is a note");
// }

// displayANoteWhenClicked();




