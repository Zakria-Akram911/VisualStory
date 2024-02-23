

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Visualizer from './Pages/Visualizer'
import CreateStory from './Pages/CreateStory'
import SavedStoriesPage from './Pages/SavedStoriesPage'
import StoryOutput from './Pages/StoryOutput'
import PaymentAndSubscription from './Pages/PaymentAndSubscription'
import Demo from './Pages/Demo'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/visualizer' element={<Visualizer />} />
        <Route path='/create-new-story' element={<CreateStory />} />
        <Route path='/my-stories' element={<SavedStoriesPage />} />
        <Route path='/your-story/:id' element={<StoryOutput />} />
        <Route path='/pricing' element={<PaymentAndSubscription />} />
        <Route path='demo' element={<Demo />} />
      </Routes>
    </BrowserRouter>
   {/* <LandingPage/> */}
    </>
  )
}

export default App
