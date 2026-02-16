import './App.css'
import Navbar from './components/Navbar'
import BannerSlider from './components/BannerSlider'
import FeaturedCollection from './components/FeaturedCollection'
import CollectionGrid from './components/CollectionGrid'

function App() {

  return (
    <div>
        <Navbar/>
        <BannerSlider />
        <FeaturedCollection />
        <CollectionGrid />
    </div>
  )
}

export default App
