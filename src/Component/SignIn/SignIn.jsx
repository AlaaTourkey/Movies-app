import React, { useState } from 'react'
import { axiosPost } from '../../Apis/Apis';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

function SignIn() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [validError, setValidError] = useState([]);


  let navigate = useNavigate()

  let [formData, setFormData] = useState({
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
      let result = await axiosPost(formData, 'signin');

      if (result.message == 'success') {
        localStorage.setItem('token', result.token)
        navigate('/Home')
      } else {
        setLoading(true)
        setError(result.message)
      }
      console.log(result);
    }
  }



  // validation

  let validation = () => {
    const schema = Joi.object({
      email: Joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().required()
    })
    return schema.validate(formData, { abortEarly: false })
  }


  return (
    <>
      <div className="text-capitalize">
        <h1 className='my-4'>Sign In</h1>
        {validError.map( (error,index)=>(
          <div key={index} className="alert alert-danger p-3 my-3 ">
          {error.message}
        </div>
        ) )}

        <form onSubmit={sendData} className='myForm'  >
          {error && <div className="alert alert-danger p-3 my-3 ">
            {error}
          </div>}

          <label htmlFor="email">email</label>
          <input onChange={getFormData} className='form-control my-3' type="text" name='email' id='email' />

          <label htmlFor="password">password</label>
          <input onChange={getFormData} className='form-control my-3' type="password" name='password' id='password' />

          <button className='btn btn-info float-end'> {loading ? 'Sign In' : <i className="fas fa-spinner fa-spin text-white "></i>}</button>

        </form>
      </div>
    </>
  )
}

export default SignIn
