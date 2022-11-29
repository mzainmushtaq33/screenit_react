import React from 'react';

const ImageFile = () => {
    return (
        <div>
            <p>Upload images from your device. Hold [Ctrl] or [Shift] to select multiple files. Maximum resolution allowed for images is 50MP.</p>
            <div className='dragDropSec'>
                Drop Some Files Here or Click to Choose
            </div>
        </div>
    );
};

export default ImageFile;