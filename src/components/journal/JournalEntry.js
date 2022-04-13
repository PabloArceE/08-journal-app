import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2015/02/24/13/23/buildings-647400__480.jpg")',
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          pulvinar odio.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>24</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
