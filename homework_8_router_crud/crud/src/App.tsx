import './App.css'
import PostList from './components/PostList'
import {Routes,Route} from 'react-router-dom' 
import NewPostList from './components/NewPostList'
import PostView from './components/PostView'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/post/new' element={<NewPostList/>}/>
        <Route path={`posts/:id`} element={<PostView/>}/>
      </Routes>
    </>
  )
}

export default App
