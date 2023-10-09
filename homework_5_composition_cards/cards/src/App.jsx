import './App.css'
import link from './img/kittens'
import Card from './components/Card'
import ImageKittens from './components/ImageKittens'
import Body from './components/Body'

function App() {

  const body = <Body 

      title={'Сонный котенок'} 
      text={'Some quick example text to build on the card title and make up the bulk of the content.'} 
      button={'Go somewhere'}

    />

  return (
    <>  
        <Card img={<ImageKittens link={link}/>} body={body}/>
    </>
  )
}

export default App
