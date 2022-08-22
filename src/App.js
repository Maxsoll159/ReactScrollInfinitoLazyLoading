import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getApis } from "./helpers/getApi";

function App() {
  const [usuarios, getUsuarios] = useState([])
  const [noMore, setNomore] = useState(true)
  const [page, setPage] = useState(20)
  useEffect(() => {
    getApis().then((response) => getUsuarios(response.results))
  }, [])

  const fetchComments = async()=>{
    const res= await fetch(`https://pokeapi.co/api/v2/ability/?limit=${page}`)
    const data = await res.json()
    return data.results;
  }

  const fetchData = async() => {
    const server = await fetchComments();
    getUsuarios([...usuarios, ...server])
    if(server.length === 0){
      setNomore(false)
    }
    setPage(page+20)
  }


  console.log(usuarios)
  return (
    <InfiniteScroll
      dataLength={usuarios.length} //This is important field to render the next data
      next={fetchData}
      hasMore={noMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {
        usuarios.map((items, index) => (
          <>
            <img loading="lazy" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt="yoast seo" height="288" width="388" />
            <h1>{items.name}</h1>
          </>
        ))
      }
    </InfiniteScroll>
  );
}

export default App;
