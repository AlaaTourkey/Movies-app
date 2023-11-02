import React, { useState } from 'react'
import { axiosPost } from '../../Apis/Apis';
import { useNavigate } from 'react-router-dom';
import Joi, { allow } from 'joi';

function SignUp() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [validError, setValidError] = useState([]);

  let navigate = useNavigate()

  let [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  function getFormData({ target }) {
    setFormData({
      ...formData, [target.name]: target.value
    })
  }
  console.log(formData);


  async function sendData(e) {
    e.preventDefault();
    let validateData = validation()
    console.log(validateData);

    if (validateData.error) {
      setValidError(validateData.error.details)
    } else {
      setLoading(false)
      let result = await axiosPost(formData, 'signup');

      if (result.message == 'success') {
        navigate('/signin')
      } else {
        setLoading(true)
        setError(result.errors)
      }
      console.log(result);

    }

  }



  // validation

  let validation = () => {
    const schema = Joi.object({
      first_name: Joi.string().required().alphanum().min(3).max(12),
      last_name: Joi.string().required().alphanum().min(3).max(12),
      email: Joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/))
    })
    return schema.validate(formData, { abortEarly: false })
  }


  return (
    <>
      <div className="text-capitalize">
        <h1 className='my-4'>registeration form</h1>

        {validError.map( (error,index)=>(
          <div key={index} className="alert alert-danger p-3 my-3 ">
          {error.message}
        </div>
        ) )}

        <form onSubmit={sendData} className='myForm'  >
          {error && <div className="alert alert-danger p-3 my-3 ">
            {error?.email?.message}
          </div>}

          <label htmlFor="first_name">first name</label>
          <input onChange={getFormData} className='form-control my-3' type="text" name='first_name' id='first_name' />

          <label htmlFor="last_name">last name</label>
          <input onChange={getFormData} className='form-control my-3' type="text" name='last_name' id='last_name' />

          <label htmlFor="email">email</label>
          <input onChange={getFormData} className='form-control my-3' type="text" name='email' id='email' />

          <label htmlFor="password">password</label>
          <input onChange={getFormData} className='form-control my-3' type="password" name='password' id='password' />

          <button className='btn btn-info float-end'> {loading ? 'Sign Up' : <i className="fas fa-spinner fa-spin text-white "></i>}</button>

        </form>
      </div>
    </>
  )
}

export default SignUp
