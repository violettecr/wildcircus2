import React, { useEffect, useState } from 'react';
import { apiEndPoint } from '../config';
import axios from 'axios';
import './css/Gallery.css'

const Gallery = () => {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/gallery/`)
      .then((result) => {
        setGallery(result.data)
        console.log(result.data);
      });
  }, []);

  /* --------- GET ELEMENTS FROM TABLE GALLERY----- */

  return (
    <div id="gallery">
      <h1>Welcome to the gallery</h1>
      <h2>Admire pictures of the past shows took by our spectators</h2>
      <div id="container">
        {
          gallery.map((picture, index) => {
            return ((index),
              <div id="structure">
                <div id="pictureName">
                  <img src={`${apiEndPoint}/uploads/${picture.picture_name}`}></img>
                </div>
                <div id="pictureInfo">
                  <div id="title">
                    <p>{picture.title}</p>
                  </div>
                  <div id="categoryName">
                    <p>{picture.category_id}</p>
                  </div>
                  <div id="date">
                    <p>{picture.date}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery;