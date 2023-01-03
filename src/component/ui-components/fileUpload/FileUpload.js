import React, { useRef } from "react";
import { useState } from "react";
import upload from "../../../services/images/upload.png";
import cross from "../../../services/images/cross.png";
import simpleFile from "../../../services/images/file-alt-success.svg";
import InvalidImage from "../../../services/images/invalidImage.png";

// import { setSnackbar } from "../snack.service";
import { useDispatch } from "react-redux";
import { ToastMessage } from "../../../utils/toastMessage/ToastMessage";
const MultiImageUpload = ({
  maxSize,
  accept,
  defaultImages,
  maxFiles,
  onChange,
  mediaType,
}) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const DefaultImgs = [];
  defaultImages?.map((src) => {
    DefaultImgs.push({
      src: src,
      typeError: "",
      sizeError: "",
      status: null,
      name: "",
    });
  });
  const [previewsArray, setPreviewsArray] = useState(DefaultImgs);
  const ref = useRef();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const Files = [e.target.files];
    // console.log("Files in", Files);
    const FILES = [];
    Files.map((fileList, ind) => {
      const getArray = Object.values(fileList);
      getArray?.map((file) => {
        let typeError = "",
          sizeError = "";
        let status;

        if (accept.includes(file.type) === false) {
          ToastMessage(
            false,
            mediaType === "Images"
              ? "Please upload these format files .jpeg, .jpg, .png"
              : "Please upload these format files .pdf, .csv, .docx"
          );
          typeError = `Invalid format`;
          status = true;
        }
        if (file.size / 1024 / 1024 > maxSize) {
          sizeError = `Size Limit: 10MB `;
          status = true;
        }

        FILES.push({
          file: file,
          typeError: typeError,
          sizeError: sizeError,
          status: status,
          name: file.name,
        });
      });
    });
    if ([...files, ...FILES].length + defaultImages.length > maxFiles) {
      // dispatch(
      //   setSnackbar({
      //     message: `Maximum ${maxFiles} files are allowed`,
      //     severity: "error",
      //   })
      // );
      // setError(`Maximum ${maxFiles} files are allowed`);
      setFiles([...files, ...FILES].slice(0, maxFiles));
    } else {
      setFiles([...files, ...FILES]);
      // setError("files");
    }

    //Setting Previews
    // debugger;
    const previews =
      [...files, ...FILES].length > maxFiles
        ? [...files, ...FILES].slice(0, maxFiles)
        : [...files, ...FILES];
    // console.log("previews", previews);
    const urlsArray = [];
    previews?.length > 0 &&
      previews.map((file) => {
        urlsArray.push({
          src: URL.createObjectURL(file?.file),
          typeError: file?.typeError,
          sizeError: file?.sizeError,
          status: file.status,
          name: file?.name,
        });
        //
      });
    // console.log("urlsArray", urlsArray);
    if (urlsArray.length + defaultImages.length > maxFiles) {
      let slicedUrls = urlsArray.slice(0, maxFiles - DefaultImgs.length);
      // console.log("slicedUrls", slicedUrls);

      setPreviewsArray([...DefaultImgs, ...slicedUrls]);
    } else {
      setPreviewsArray([...DefaultImgs, ...urlsArray]);
    }

    // return [...files, FILES];
    onChange(
      [...files, ...FILES].length > maxFiles
        ? [...files, ...FILES].slice(0, maxFiles)
        : [...files, ...FILES]
    );
  };
  // console.log("previewsArray", previewsArray);
  const handleClick = (e) => {
    ref.current.click();
  };
  const filterFile = (file) => {
    const Previews = previewsArray;
    const filtered = Previews.filter((item) => {
      return item?.src !== file.src;
    });
    setPreviewsArray(filtered);
    //Now change the Files Array
    const Files = files;
    const filteredFiles = Files.filter((item) => {
      return item.name !== file.name;
    });

    setFiles([...filteredFiles]);
    onChange([...filteredFiles]);
    if ([...filteredFiles].length <= maxFiles) {
      setError("");
    }
  };
  return (
    <div>
      <div
        style={{
          //   marginTop: "20vh",
          // display: "flex",
          // justifyContent: "center",
          width: "100%",
          padding: "20px 20px 0px 20px",
        }}
      >
        {/* <div
          style={{
            boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
            padding: "30px",
          }}
        > */}
        <div
          onClick={handleClick}
          style={{
            width: "auto",
            height: "auto",
            //   margin: "20px",
            border: "2px dashed gray",
            borderRadius: "10px",
            color: "orange",
            cursor: "pointer",
            padding: "10px 20px",
          }}
        >
          <h3>Upload {mediaType}</h3>
          {/* <h5>Click to Upload</h5> */}
          <img src={upload} width="100px" height="100px" />
        </div>
        <input
          ref={ref}
          type="file"
          onChange={(e) => handleChange(e)}
          // accept={accept}
          multiple
          hidden
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {previewsArray.length > 0 &&
            previewsArray.map((src, index) => (
              <div key={index} style={{ width: "130px" }}>
                {mediaType === "Documents" ? (
                  <>
                    <div style={{ position: "relative" }}>
                      <div>
                        <img
                          src={cross}
                          width="20px"
                          height="20px"
                          style={{
                            position: "absolute",
                            right: "23px",
                            top: "14px",
                            cursor: "pointer",
                          }}
                          onClick={() => filterFile(src)}
                        />
                      </div>

                      <img
                        src={simpleFile}
                        width="100px"
                        height={"100px"}
                        // style={{ padding: "0px 20px" }}
                      />
                    </div>
                    <div key={index}>
                      {src.name.slice(0, 6)}...
                      {src.name.slice(src.name.length - 4)}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ position: "relative",marginTop:'16px' }}>
                      <img
                        src={cross}
                        width="20px"
                        height="20px"
                        style={{
                          position: "absolute",
                          right: "19px",
                          top: "-6px",
                          cursor: "pointer",
                        }}
                        onClick={() => filterFile(src)}
                      />
                      <img
                        src={src.status ? InvalidImage : src?.src}
                        width="100px"
                        height={"100px"}
                        // style={{ padding: "0px 20px" }}
                      />
                    </div>
                    {/* <div key={index}>{src.name}</div> */}
                  </>
                )}
                {/* <div style={{ position: "relative" }}>
                    <img
                      src={cross}
                      width="20px"
                      height="20px"
                      style={{
                        position: "absolute",
                        right: "-8px",
                        top: "-6px",
                        cursor: "pointer",
                      }}
                      onClick={() => filterFile(src)}
                    />
                    <img
                      src={simpleFile}
                      width="100px"
                      height={"100px"}
                      // style={{ padding: "0px 20px" }}
                    />
                  </div> */}
                <div style={{ color: "red" }}>{src?.typeError}</div>
                <div style={{ color: "red" }}>{src?.sizeError}</div>
              </div>
            ))}
        </div>
        {/* </div> */}
      </div>
      <div style={{ color: "red" }}>{error}</div>
      {/* <div>
        {files?.map((file, ind) => (
          <div key={ind}>{file?.file?.name}</div>
        ))}
      </div> */}
    </div>
  );
};

export default MultiImageUpload;
