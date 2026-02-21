import './App.css'
import Navbar from './components/Navbar'
import Collections from './pages/Collections'
import Homepage from './pages/Homepage'
import {Routes, Route} from 'react-router-dom'
import Productdetails from './pages/Productdetails'

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='' element={<Homepage />}></Route>
          <Route path='jewellery/:collectionName' element={<Collections />}></Route>
          <Route path='jewellery/product/:productName' element={<Productdetails />}></Route>
        </Routes>
        
    </div>
  )
}

export default App
