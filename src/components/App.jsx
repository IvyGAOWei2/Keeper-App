import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [noteData, setNoteDate] = useState([]);

    function addNote(form){
        setNoteDate(prev=>([
            ...prev,
            form
        ]))
    }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {
        noteData.map((item,index) => (
      <Note key={index} title={item.title} content={item.content} />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
