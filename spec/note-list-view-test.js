function checkIfNoteListViewCanBeInstatiated() {
	assert.isTrue(view = new NoteView());
};

checkIfNoteListViewCanBeInstatiated()

function canFormatANoteList() {
	view = new NoteView;
	view._list.AddNote("Note 1");
	view._list.AddNote("Note 2");
	assert.isTrue(view.display() === "<ul><li>Note 1</li><li>Note 2</li></ul>");
};

canFormatANoteList()

function canFormatOneNote() {
	view = new NoteView;
	view._list.AddNote("Note 1");
	assert.isTrue(view.display() === "<ul><li>Note 1</li></ul>");
};

canFormatOneNote()

function canFormatEmptyList() {
	view = new NoteView;
	assert.isTrue(view.display() === "<ul></ul>");
};

canFormatEmptyList()

function returnTextWithTwentyChars() {
	view = new NoteView;
	view._list.AddNote('This string is longER THAN TWENTY CHARS');
	assert.isTrue(view.limitedDisplay() === '<ul><li>This string is long</li></ul>');
};

returnTextWithTwentyChars()
