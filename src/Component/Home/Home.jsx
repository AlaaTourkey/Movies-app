import Movie from "../Movie/Movie";
import Tv from "../Tv/Tv";
import People from "../People/People";
function Home() {

let itemsNum = 10;

  return (
    <>
      <Movie itemsNum={itemsNum}/>
      <Tv itemsNum={itemsNum}/>
      <People itemsNum={itemsNum}/>
    </>
  )
}

export default Home
