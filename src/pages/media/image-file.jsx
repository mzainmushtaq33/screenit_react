import React from "react";
import AudioUpload from "../../component/ui-components/audioUpload/AudioUpload";
import MultiImageUpload from "../../component/ui-components/fileUpload/FileUpload";
import VideoUpload from "../../component/ui-components/videoUpload/VideoUpload";

const ImageFile = ({mediaName,setFiles}) => {
  // console.log('mediaName', mediaName)
  const checkFiles = (e) => {
    console.log("e images:>> dfdf ", e);
    setFiles(e)
  };
  return (
    <>
      {mediaName === "Image" && (
        <div>
          <p>
            Upload images from your device. Hold [Ctrl] or [Shift] to select
            multiple files. Maximum resolution allowed for images is 50MP.
          </p>
          {/* <div className="dragDropSec">
        Drop Some Files Here or Click to Choose */}
          <MultiImageUpload
            maxSize={2}
            accept={["image/jpeg", "image/jpg", "image/png"]}
            defaultImages={[]}
            maxFiles={3}
            onChange={checkFiles}
          />
          {/* </div> */}
        </div>
      )}
      {mediaName === "Video" && (
        <div className="App_video">
          {/* <h1>Video upload</h1> */}
          <VideoUpload width={400} height={250} />
        </div>
      )}
      {mediaName === "Document" && (
        <div>
          <p>
            Upload documents from your device. Hold [Ctrl] or [Shift] to select
            multiple files. Maximum size allowed for files is 50MP.
          </p>
          {/* <div className="dragDropSec">
        Drop Some Files Here or Click to Choose */}
          <MultiImageUpload
            maxSize={2}
            accept={[
              "application/pdf",
              "text/csv",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ]}
            defaultImages={[]}
            maxFiles={3}
            onChange={checkFiles}
          />
          {/* </div> */}
        </div>
      )}
      {mediaName === "Audio" && (
        <div className="App_audio">
          {/* <h1>Video upload</h1> */}
          <AudioUpload width={400} height={250} />
        </div>
      )}
    </>
  );
};

export default ImageFile;
