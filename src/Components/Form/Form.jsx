import './Form.css'
import React, { useState } from 'react';
import * as yup from 'yup';

const userSchema = yup.object().shape({
  Yourname: yup.string().min(4, 'At least 4 letters').required('This field is required'),
  email: yup.string().email('Please enter a valid email address').required('This field is required'),
  message: yup.string().required('This field is required'),
  Subject: yup.string().required('This field is required'),
});

function Form() {
  const [formData, setFormData] = useState({
    Yourname: '',
    email: '',
    Subject: '',
    message: '',
  });

  const [errorsobject, setErrorsobject] = useState({});

  async function validateForm() {
    try {
      await userSchema.validate(formData, { abortEarly: false });
      setErrorsobject({});
      return true;
    } catch (err) {
      const errors = {};
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrorsobject(errors);
      return false;
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      console.log('Submitting:', formData);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Yourname'>Your name</label>
        <input
          type="text"
          name="Yourname"
          value={formData.Yourname}
          onChange={handleChange}
          placeholder="Abc"
        />
        <div className='error'>
          {errorsobject.Yourname && <span className='errors'>{errorsobject.Yourname}</span>}
        </div>
        
        <label htmlFor='email'>Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Abc@def.com"
        />
        <div className='error'>
          {errorsobject.email && <span className="errors">{errorsobject.email}</span>}
        </div>
        
        <label htmlFor='Subject'>Subject</label>
        <input
          name="Subject"
          value={formData.Subject}
          onChange={handleChange}
          placeholder='This is an optional'
        />
        <div className='error'>
          {errorsobject.Subject && <span className='errors'>{errorsobject.Subject}</span>}
        </div>
        
        <label htmlFor='message'>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Hi i’d like to ask about'
        />
        <div className='error'>
          {errorsobject.message && <span className='errors'>{errorsobject.message}</span>}
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
