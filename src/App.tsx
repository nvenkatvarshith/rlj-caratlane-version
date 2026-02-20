import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='' element={<Homepage />}></Route>
        </Routes>
        
    </div>
  )
}

export default App
