import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import IntroductionPage from './introductionPage/IntroductionPage'
import JoinRoomPage from './joinRoomPage/JoinRoomPage'
import RoomPage from './roomPage/RoomPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/join-room' element={<JoinRoomPage />} />
        <Route path='room' element={<RoomPage />} />
        <Route path='/' element={<IntroductionPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
