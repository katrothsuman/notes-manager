const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;
const FILE_PATH = './data.json';

function loadNotes() {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(notes, null, 2));
}

app.get('/notes', (req, res) => {
  const notes = loadNotes();
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const notes = loadNotes();
  const newNote = { id: uuidv4(), title, content };
  notes.push(newNote);
  saveNotes(notes);
  res.status(201).json(newNote);
});

app.delete('/notes/:id', (req, res) => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.id !== req.params.id);
  saveNotes(newNotes);
  res.json({ message: 'Deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});