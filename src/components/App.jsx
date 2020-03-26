import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevValue => [...prevValue, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevValue =>
      prevValue.filter((onenote, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />

      <CreateArea addFunc={addNote} />

      {notes.map((onenote, index) => (
        <Note
          key={index}
          id={index}
          title={onenote.title}
          content={onenote.text}
          deleteFunc={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
