import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import News from './components/news/News'
import Advertising from './components/advertising/Advertising'
import OtherWidget from './components/OtherWidget/OtherWidget'

function App() {
  
  return (
    <>
      <News title={'Россия'}/>
      <SearchBar/>
      <Advertising fast={'РЕКЛАМА'}/>
      <OtherWidget title={'Россия'} />
    </>
  )
}

export default App
