import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get(API_URL);
    setNotes(res.data);
  };

  const addNote = async () => {
    if (title && content) {
      await axios.post(API_URL, { title, content });
      setTitle('');
      setContent('');
      fetchNotes();
    }
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNotes();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Notes App</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        style={{ marginRight: '10px' }}
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note content"
        style={{ marginRight: '10px' }}
      />
      <button onClick={addNote}>Add</button>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <b>{note.title}</b>: {note.content}
            <button onClick={() => deleteNote(note.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
