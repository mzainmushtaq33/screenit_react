import React from "react";
import './drag-drop.scss';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
    const [file, setFile] = React.useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <div id="dragDrop">
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        </div>
    );
}

export default DragDrop;