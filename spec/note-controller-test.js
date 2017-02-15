function checkIfNoteControllerCanBeInstatiated() {
	assert.isTrue(controller = new NoteController());
};

checkIfNoteControllerCanBeInstatiated();

function displayANoteWhenClicked() {
	view = document.getElementById('view')
	controller = new NoteContoller();
	controller._list.addNote("This is a note");
	assert.isTrue(FUCK === "This is a note");
}

displayANoteWhenClicked();