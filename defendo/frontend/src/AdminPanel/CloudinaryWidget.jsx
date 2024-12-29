import React, { useEffect, useRef, useState, useCallback } from 'react';

function CloudinaryWidget({ onImageUpload }) {
    const cloundinaryRef = useRef();
    const widgetRef = useRef();
    const [uploadedImages, setUploadedImages] = useState([]);

    useEffect(() => {
        cloundinaryRef.current = window.cloudinary;
        widgetRef.current = cloundinaryRef.current.createUploadWidget(
            {
                cloudName: 'dqqjusx7n',
                uploadPreset: 'xmd1whad',
                maxFileSize: 10048576,
                clientAllowedFormats: ['jpeg', 'jpg', 'png'],
                maxFiles: 2,
                multiple: true,
            },
            function (error, result) {
                if (!error && result.event === 'success') {
                    const imageUrl = result.info.secure_url;
                    setUploadedImages((prevImages) => [...prevImages, imageUrl]);
                }
            }
        );
    }, []);

    const handleRemoveImage = (index) => {
        setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleUploadClick = () => {
        if (uploadedImages) {
            widgetRef.current.open();
        }
    };

    const memoizedOnImageUpload = useCallback(onImageUpload, []);

    useEffect(() => {
        memoizedOnImageUpload(uploadedImages);
    }, [uploadedImages, memoizedOnImageUpload]);





    return (
        <div>
            <div className='d-flex mt-5 flex-wrap mb-2'>
                {uploadedImages.map((imageUrl, index) => (
                    <div key={index} className='position-relative w-25 mx-2'>
                        <img src={imageUrl} alt={`Image ${index + 1}`} className='w-100 object-cover mx-2 my-2' />
                        <button
                            onClick={() => handleRemoveImage(index)}
                            className='position-absolute top-0 start-0 bg-danger text-white rounded-circle' 
                            style={{width : '24px'}}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={handleUploadClick}
                type="button"
                className="px-5 py-2 rounded-3 w-50"
            >
                Upload Images
            </button>
            <p className='mt-2'>Upload upto 2 images (jpeg, png)</p>
        </div>
    );
}

export default CloudinaryWidget;
