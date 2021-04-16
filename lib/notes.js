const fs = require('fs');
const path = require('path');

function addNote(response, notesArray) {
    const note = response;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );

    return note;
}

module.exports = {addNote};