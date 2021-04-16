const router = require('express').Router();
const {notes} = require('../../db/db.json');
const {addNote} = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNotes = addNote(req.body, notes);
    res.json(newNotes);
})

module.exports = router;