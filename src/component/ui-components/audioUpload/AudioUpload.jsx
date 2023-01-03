import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import upload from "../../../services/images/upload.png";

export default function AudioUpload(props) {
  const { width, height,onChange, mediaType } = props;
  const [error, setError ] = useState({})

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    // console.log('file,url :>> ', file);
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
    <>
     {!source && <div
            onClick={handleChoose}
            style={{
              width: "auto",
              height: "auto",
            //   margin: "20px",
              border: "2px dashed gray",
              borderRadius: "10px",
              color: "orange",
              cursor: "pointer",
              padding: '10px 20px'
            }}
          >
            <h3>Upload {mediaType}</h3>
            {/* <h5>Click to Upload</h5> */}
            <img src={upload} width="100px" height="100px" />
          </div>}
          <div className="AudioInput">
      <input
        ref={inputRef}
        className="AudioInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mp3,.wav,.ogg"
      />
      {/* {!source && <button onClick={handleChoose}>Choose Audio</button>} */}
      {source && <ReactAudioPlayer src={source} controls />}
      {/* <div className="VideoInput_footer">{source || "Nothing selectd"}</div> */}
      {error&&<div style={{ color: "red" }}>{error?.err}</div>}
    </div>
    </>
    
  );
}
