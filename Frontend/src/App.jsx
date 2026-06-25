
import Form from './components/form'
import NotesProject from './components/NotesProject'
import GalleryPage from './pages/GalleryPage'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import RandomJoke from './pages/RandomJoke';
import PasswordGenerator from './features/PasswordGenerator/pages/PasswordGenerator';
import Login from './features/auth/login-register/pages/Login';

function App() {  

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/jokes" element={<RandomJoke />} />
        <Route path="/password_generator" element={<PasswordGenerator />} />
      </Routes>

    </>
  )
}

export default App

