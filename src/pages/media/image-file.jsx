import React from "react";
import MultiImageUpload from "../../component/ui-components/fileUpload/FileUpload";

const ImageFile = () => {
    const checkFiles = (e) => {
          console.log('e :>> ', e);
    }
  return (
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
  );
};

export default ImageFile;
