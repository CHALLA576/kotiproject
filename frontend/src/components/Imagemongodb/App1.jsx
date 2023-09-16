import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  style from "../Imagemongodb/App.module.css"

function App1() {
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({ image: null });

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = () => {
        axios.get('http://localhost:5000/api/images')
            .then(response => setImages(response.data))
            .catch(error => console.error("Error fetching images:", error));
    };

    const handleSubmit = e => {
        e.preventDefault();

        const data = new FormData();
        data.append('image', formData.image);

        axios.post('http://localhost:5000/api/upload', data)
            .then(() => fetchImages())
            .catch(error => console.error("Error uploading image:", error));
    };

    // Optional function to convert ArrayBuffer to Base64
    function arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    return (
        <div id={style.main}>
            <div id={style.sub}>

                <h1>Upload Image to MongoDB</h1>

                <form onSubmit={handleSubmit}>

                    <input type="file" onChange={e => setFormData({ ...formData, image: e.target.files[0] })} required />
                    <button type="submit">Upload</button>

                </form>

                <h1>Uploaded Images</h1>
                <div id={style.img}>
                    {images.map(image => (

                        <div key={image._id}>
                            <img alt='' width={200} height={200} src={`data:image/png;base64,${arrayBufferToBase64(image.img.data.data)}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App1;
