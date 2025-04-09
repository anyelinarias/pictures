import SearchBar from "./assets/components/SearchBar"
import ImageList from "./assets/components/ImageList"
import searchImages from "./api"

function App() {
  //searchImages('cars')
  return (
    <>
      <h1>Pictures App</h1>
      <SearchBar />
      <ImageList/>
    </>
  )
}

export default App
