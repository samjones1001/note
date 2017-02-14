function checkIfNoteControllerCanBeInstatiated() {
	assert.isTrue(controller = new NoteController());
};

checkIfNoteControllerCanBeInstatiated();