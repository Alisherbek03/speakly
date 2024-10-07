import "./record.css";

const Record = ({ recordimage, recordtext, recordparagraph }) => {
  return (
    <div>
      <div id="record" className="record-card active">
        <img className="record-img" src={recordimage} alt="img" />
        <h1 className="record-text-h">{recordtext}</h1>
        <p>{recordparagraph}</p>
      </div>
    </div>
  );
};

export default Record;
