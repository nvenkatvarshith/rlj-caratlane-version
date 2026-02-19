import './App.css'
import Navbar from './components/Navbar'
import BannerSlider from './components/BannerSlider'
import FeaturedCollection from './components/FeaturedCollection'
import CollectionGrid from './components/CollectionGrid'
import CollectionList from './components/CollectionList'
import CollectionListBig from './components/CollectionListBig'

function App() {

  return (
    <div>
        <Navbar/>
        <BannerSlider />
        <FeaturedCollection />
        <CollectionGrid />
        <CollectionList />
        <CollectionListBig />
    </div>
  )
}

export default App
