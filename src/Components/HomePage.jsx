import React from 'react';
import './css/HomePage.css';

const HomePage = () => {
  return (
    <div id="HomePage">
      <div
        id="picture"
        style={
          {
            backgroundImage: `url("${process.env.PUBLIC_URL}/Pictures/homepage_background_picture.jpg")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            height: '500px',
            display: 'flex',
          }
        }
      >
        <p id="title">WILD CIRCUS 2.0</p>
      </div>
      <div>
        <h1>Performances</h1>
        <div id="performances">
          <div id="laugh">
            <h2>laugh</h2>
            <p>As an adult, come and discover our irresistible clowns,
              between practical jokes and pranks let yourself be carried away
              by their joy and fall back into childhood.
            </p>
          </div>
          <div id="dream">
            <h2>dream</h2>
            <p>Let yourself be carried away in a world where the real and the
              imaginary are one, in the company of our talented magicians,
              discover a wonderful world limited only by your imagination.
            </p>
          </div>
          <div id="marvel">
            <h2>marvel at</h2>
            <p>Tame the untameable in the company of our tamers, between roar
              and razor-sharp claws, watch these fierce felines turn into sweet 
              kittens.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;