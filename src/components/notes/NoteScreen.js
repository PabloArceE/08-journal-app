import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
          <input
            type='text'
            placeholder="Some awesome title"
            className="notes__title-input"
            autoComplete="off"
          />
          <textarea
            placeholder="What happened today"
            className="notes__textarea"
          ></textarea>
          <div className="notes__image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg"
              alt="se rompió el enlace, lo siento" 
            />
          </div>
      </div>
    </div>
  );
};

export default NoteScreen;
