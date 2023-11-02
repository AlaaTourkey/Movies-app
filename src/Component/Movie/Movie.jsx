import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import axios from 'axios'
import Loading from '../Loading/Loading'

function Movie(props) {
  const [movies, setMovies] = useState([])

  let getTrending = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=122c0a811f2e430cff77eb476de35bc6`)
    setMovies(data.results)
  }

  useEffect(() => {
    getTrending()
  }, [])

  return (
    <>
      {movies.length > 0 ? <>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-4 ">
                <div className="itemInfo  my-4 w-100 ">
                  <div className='bord'></div>
                  <h1 className='text-capitalize' > trinding <br /> movies <br /> to watch now </h1>
                  <p className='suptitle text-uppercase' >most watched moves by day</p>
                  <div className='bord w-100'></div>
                </div>
              </div>

              {movies.slice(0,props.itemsNum).map((value, index) => <Item key={index} data={value} />)}
            </div>
          </div>
        </div></> : <Loading />}
    </>
  )
}

export default Movie
