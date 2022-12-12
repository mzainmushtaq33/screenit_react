import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function AudioUpload(props) {
  const { width, height,onChange } = props;
  const [error, setError ] = useState({})

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log('file,url :>> ', file);
    setSource(url);
    let sizeInKb = file.size /1000 
    const totalSizeInKb = 10*1024;
    if(sizeInKb<= totalSizeInKb){
      onChange([file])
    }else{
         setError({err: 'Minimum size is 10MB',status:true})
         onChange({err: 'Minimum size is 10MB',status:true})
    }

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
      {source && <ReactAudioPlayer src={source} controls />}
      {/* <div className="VideoInput_footer">{source || "Nothing selectd"}</div> */}
      {error&&<div style={{ color: "red" }}>{error?.err}</div>}
    </div>
  );
}
