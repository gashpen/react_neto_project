import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieList from './components/MovieList/MovieList'
import SearchForm from './components/SearchForm/SearchForm'
import MoviePage from './components/MoviePage/MoviePage'
import Favorite from './components/Favorite/Favorite'

function App() {

  return (
    <div >
      <Routes>
          <Route path='/' element={ <SearchForm/>}/>
      </Routes>
      <Routes>
          <Route path='/' element={ <MovieList/>}/>
      </Routes>
      <Routes>
          <Route path='favorite' element={<Favorite/>}/>
       </Routes>
       <Routes>
        <Route path='movie/:id' element={<MoviePage/>}/>
       </Routes>
      
    </div>
  )
}

export default App
