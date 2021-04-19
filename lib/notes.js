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

// function deleteNote(index, notesArray) {
//     const newArray = notesArray.filter(index => notesArray.id !== index);
//     fs.writeFileSync(
//         path.join(__dirname, '../db/db.json'),
//         JSON.stringify({notes: newArray}, null, 2)
//     );
// };

module.exports = {addNote};