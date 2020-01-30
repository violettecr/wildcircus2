import React, { useEffect, useState } from 'react';
import { apiEndPoint } from '../config';
import './css/Visitor.css';
import axios from 'axios';
import $ from 'jquery';

const Visitor = () => {

  /* -------------------GET CATEGORIES FROM API------------------*/

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`${apiEndPoint}/category/`)
      .then((result) => {
        setCategory(result.data);
      });
  }, []);

  /* -------------------POST ON API------------------*/

  const [form, setForm] = useState({
    category: '',
    title: '',
    date: undefined,
    picture: null,
  });

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('category_id', form.category);
    formData.append('title', form.title);
    formData.append('date', form.date);
    formData.append('picture', form.picture);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post(`${apiEndPoint}/gallery`, formData, config)
      .then(() => {
        console.log(form);
        alert('Picture sent !')
      })
      .catch((error) => {
        if (error) {
          console.log(error)
          alert('Did you complete all inputs and choose a category ?')
        }
      });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  /* -------------------PREVIEW PICTURE------------------*/

  const readURL = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#blah').attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  $('#imgInp').change(function () {
    readURL(this);
  });

  /* -------------------RETURN------------------*/

 return (
   <div id="visitor">
     <h1>Share your experience of Wild Circus</h1>
     <h2>Download your best photo of the show you assisted !</h2>
     <form id="form" runat="server">
     <h3>Please fill all fields</h3>
      <input
        placeholder="Picture's title"
        onChange={(event) => setForm({ ...form, title: event.target.value })}
        maxLength="50">
      </input>
      <select
        onChange={(event) => setForm({ ...form, category: event.target.value })}
      >
        <option id="cat">Category's picture</option>
        {category.map((category) => (
          <option value={category.id} key={category.name}>{category.name}</option>
        ))}
        ;
      </select>
      <input
        type="date"
        maxLength="8"
        onChange={(event) => setForm({ ...form, date: event.target.value })}
      >
      </input>
      <input
        name="picture"
        onChange={(event) => setForm({ ...form, picture: event.target.files[0] })}
        type="file"
        maxLength="100"
        id="imgInp"
        
      >
      </input>
        <img id="blah" src="#" alt="fairegardersoncheval" className={!form.picture ? 'imgUnloaded' : 'imgLoaded'} />
      <button
        type="submit"
        onClick={submitForm}
        id="button_register"
      >
        Send your picture
      </button>
     </form>
   </div>
 )
}

export default Visitor;