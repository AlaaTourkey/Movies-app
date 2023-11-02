import React from 'react'
import { Link } from 'react-router-dom';

function Item(props) {
  console.log(props);
  let { name, vote_average, poster_path, overview, id ,media_type } = props.data
  return (
    <>
      <div className="col-md-2 col-sm-4 col-4">
        <div className="">
          <div className="item position-relative overflow-hidden">
            <img className='w-100 ' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" srcset="" />

            <Link to={`/details/${id}/${media_type}`}>
              <div className="overlay position-absolute d-flex align-items-center ">
                <p>{overview.split(' ').slice(0, 10).join(' ')}</p>
              </div>
            </Link>

            <div className="vote position-absolute top-0 end-0 p-1 ">
              {vote_average.toFixed(1)}
            </div>
          </div>
          <div className="">
            <h5 className=' my-3 '>{name}</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item
