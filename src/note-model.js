'use strict';

(function(exports){

  function Note(text){
  this.text = text;
  }

  function displayNote (){
    return this.text;
  }

exports.Note = Note;
Note.prototype.displayNote = displayNote;

})(this);
