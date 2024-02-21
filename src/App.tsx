

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Visualizer from './Pages/Visualizer'
import CreateStory from './Pages/CreateStory'
import SavedPage from './Pages/SavedPage'
import StoryOutput from './Pages/StoryOutput'
import PaymentAndSubscription from './Pages/PaymentAndSubscription'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/visualizer' element={<Visualizer />} />
        <Route path='/create-new-story' element={<CreateStory />} />
        <Route path='/saved-stories' element={<SavedPage />} />
        <Route path='/your-story/:id' element={<StoryOutput />} />
        <Route path='/pricing' element={<PaymentAndSubscription />} />
      </Routes>
    </BrowserRouter>
   {/* <LandingPage/> */}
    </>
  )
}

export default App
