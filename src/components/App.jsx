import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";


function App() {
    const [noteData, setNoteDate] = useState([]);

    function addNote(form){
        const newNote = {...form, id:uuidv4()};
        setNoteDate(prev=>([
            ...prev,
            newNote
        ]));
    }

    function deleteNote(id){
        setNoteDate(noteData.filter(item => 
            item.id != id
        ))
    }

    function updateNote(id, updated) {
        setNoteDate(prev => prev.map(note => note.id === id ? { ...note, ...updated } : note));
    }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {
        noteData.map((item,index) => (
      <Note key={item.id} id={item.id} title={item.title} content={item.content} deleteNote={deleteNote} updateNote={updateNote}/>
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
