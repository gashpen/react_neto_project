import './App.css'
import {Routes,Route} from 'react-router-dom'
import DriftPage from './components/DriftPage'
import ForzaPage from './components/ForzaPage'
import HomePage from './components/HomePage'
import TimeAttackPage from './components/TimeAttackPage'
import Layout from './components/Layout'
function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='drift' element={<DriftPage/>}/>
            <Route path='carting'element={<ForzaPage/>}/>
            <Route path='time-attack' element={<TimeAttackPage/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
