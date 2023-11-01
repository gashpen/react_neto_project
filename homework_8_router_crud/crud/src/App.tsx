import './App.css'
import './components/PostMain/PostMain.css'
import './components/CreatedPost/CreatedPost.css'
import PostList from './components/PostMain/PostList'
import {Routes,Route} from 'react-router-dom' 
import NewPost from './components/CreatedPost/NewPost'
import PostView from './components/PostEditAndRemove/PostView'
import EditPost from './components/PostEditAndRemove/EditPost'
import './font/MinecraftTen-VGORe.ttf'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<PostList/>}/>
        <Route path='posts/new' element={<NewPost/>}/>
        <Route path='posts/:id' element={<PostView/>}/>
        <Route path='posts/:id/edit' element={<EditPost/>}/>
      </Routes>
    </>
  )
}

export default App
