import './App.css'
import PostList from './components/PostList'
import {Routes,Route} from 'react-router-dom' 
import NewPostList from './components/NewPostList'
function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/post/new' element={<NewPostList/>}/>
      </Routes>
    </>
  )
}

export default App
