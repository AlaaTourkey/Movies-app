import React, { useEffect, useState } from 'react'
import axios from 'axios'
function People(props) {

  const [person, setPerson] = useState([])

  let getPersons = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=122c0a811f2e430cff77eb476de35bc6`)
    setPerson(data.results)
    console.log(data.results);
  }

  useEffect(() => {
    getPersons()
  }, [])


  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-md-4 pt-4 float-end ">
            <div className="itemInfo  my-4 w-100 ">
              <div className='bord'></div>
              <h1 className='text-capitalize' > trinding <br /> people <br /> to watch now </h1>
              <p className='suptitle text-uppercase' >most watched moves by day</p>
              <div className='bord w-100'></div>
            </div>
          </div>

          {person.slice(0, props.itemsNum).map((value, index) => (

            <div className="col-md-2 col-sm-4 col-4">

              <div className="item position-relative overflow-hidden">
                <img className='w-100 ' src={`https://image.tmdb.org/t/p/original${value.profile_path}`} alt="" />

                <div className="overlay w-100 position-absolute d-flex align-items-center justify-content-center ">
                  <p>{value.original_name}</p>
                </div>
              </div>
              
              <div className="">
                  <h5 className=' my-3 '>{value.name}</h5>
                </div>
            </div>

          ))}
        </div>
      </div >
    </>
  )
}

export default People
