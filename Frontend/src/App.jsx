
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
        <Route path = '/gallery' element= {<GalleryPage />} /> 
        <Route path = '/' element= {<Home />} /> 
        <Route path = '/jokes' element= {<RandomJoke />} /> 
        <Route path = '/password_generator' element= {<PasswordGenerator />} />
        <Route path = '/login' element= {<Login />} /> 
      </Routes>

    </>
  )
}

export default App

