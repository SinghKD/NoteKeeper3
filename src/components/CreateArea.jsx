import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    text: ""
  });

  const [zoom, setZoom] = useState(false);

  function doZoom() {
    setZoom(true);
  }

  function addText(event) {
    const { value, name } = event.target;

    setNote(prevValue => {
      if (name === "title")
        return {
          title: value,
          text: prevValue.text
        };
      else
        return {
          title: prevValue.title,
          text: value
        };
    });
  }

  function addIt(event) {
    props.addFunc(note);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {zoom ? (
          <input
            onChange={addText}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          onClick={doZoom}
          onChange={addText}
          name="content"
          placeholder="Take a note..."
          rows={zoom ? "3" : "1"}
          value={note.text}
        />
        <Zoom in={zoom}>
          <Fab onClick={addIt}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
