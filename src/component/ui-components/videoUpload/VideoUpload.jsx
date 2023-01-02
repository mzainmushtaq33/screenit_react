import React,{useState} from "react";
import upload from "../../../services/images/upload.png";

export default function VideoUpload(props) {
  const { width, height,onChange, mediaType } = props;
  const [error, setError ] = useState({})

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // console.log('file :>> ', file);
    const url = URL.createObjectURL(file);
    setSource(url);
    // onChange([file])
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
    <div className="VideoInput">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {/* {!source && <button onClick={handleChoose}>Choose Video</button>} */}
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      {error&&<div style={{ color: "red" }}>{error?.err}</div>}
      {/* <div className="VideoInput_footer">{source || "Nothing selectd"}</div> */}
    </div>
    </>
    
  );
}
