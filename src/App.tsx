import './App.css'
import Navbar from './components/Navbar'
import Collections from './pages/Collections'
import Homepage from './pages/Homepage'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='' element={<Homepage />}></Route>
          <Route path='jewellery' element={<Collections />}></Route>
        </Routes>
        
    </div>
  )
}

export default App
