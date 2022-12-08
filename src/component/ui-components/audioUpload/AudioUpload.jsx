import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function AudioUpload(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="AudioInput">
      <input
        ref={inputRef}
        className="AudioInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mp3,.wav,.ogg"
      />
      {!source && <button onClick={handleChoose}>Choose Audio</button>}
      {source && <ReactAudioPlayer src={source} autoPlay controls />}
      {/* <div className="VideoInput_footer">{source || "Nothing selectd"}</div> */}
    </div>
  );
}
