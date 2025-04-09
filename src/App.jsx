import { useState } from "react"
import SearchBar from "./assets/components/SearchBar"
import ImageList from "./assets/components/ImageList"
import searchImages from "./api"

function App() {
  //searchImages('cars')
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('Usted esta buscando con: ', term)
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <>
      <h1>Pictures App</h1>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </>
  )
}

export default App
