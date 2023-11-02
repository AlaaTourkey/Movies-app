import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { useParams } from 'react-router-dom'

function ItemDetails() {
  const [details, setDetails] = useState('')

  let x=useParams();
  console.log(x.media);


  let getDetails = async (id,mediaType) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${x.media}/${x.id}?api_key=122c0a811f2e430cff77eb476de35bc6`)
    setDetails(data)
  }
  console.log(details);
  useEffect(() => {
    getDetails()
  }, [])

  return (
    <>
      {details ? <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img className='w-100 ' src={`https://image.tmdb.org/t/p/original${details.poster_path}`} alt="" />
          </div>
          <div className="col-md-8 py-2">
            <h1>{details.title} {details.name}</h1>
            <p className='fs-4'>{details.tagline}</p>
            <p>{details.genres.map( (value,index)=><span key={index} className='badge bg-info p-2 mx-2' >{value.name}</span> )}</p>
            <ul className='list-unstyled my-4 '>
              <li>vote {details.vote_average.toFixed(1)}</li>
              <li className='my-4'>vote {details.vote_count}</li>
              <li>vote {details.popularity}</li>
              <li className='my-4'>vote {details.release_date}</li>
            </ul>
            <p className='suptitle fs-4' >{details.overview}</p>
          </div>
        </div>
      </div> : <Loading/>}
    </>
  )
}

export default ItemDetails
