import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import axios from 'axios'
import Loading from '../Loading/Loading'

function Tv(props) {
  const [tv, setTv] = useState([])

  let getTrending = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=122c0a811f2e430cff77eb476de35bc6`)
    setTv(data.results)
  }

  useEffect(() => {
    getTrending()
  }, [])


  return (
    <>
      {tv.length > 0 ? <><div className="container my-5">
        <div className="row" dir="rtl">
          <div className="col-md-4 pt-4 float-end ">
            <div className="itemInfo  my-4 w-100 ">
              <div className='bord'></div>
              <h1 className='text-capitalize' > trinding <br /> Tv <br /> to watch now </h1>
              <p className='suptitle text-uppercase' >most watched moves by day</p>
              <div className='bord w-100'></div>
            </div>
          </div>

          {tv.slice(0,props.itemsNum).map((value, index) => <Item key={index} data={value} />)}
        </div>
      </div></> : <Loading />}
    </>
  )
}

export default Tv
