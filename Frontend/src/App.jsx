
import Form from './components/form'
import NotesProject from './components/NotesProject'
import GalleryPage from './pages/GalleryPage'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import RandomJoke from './pages/RandomJoke';
import PasswordGenerator from './features/PasswordGenerator/pages/PasswordGenerator';


function App() {

  return (
    <>
      <Routes>
        <Route path = '/gallery' element= {<GalleryPage />} /> 
        <Route path = '/Home' element= {<Home />} /> 
        <Route path = '/jokes' element= {<RandomJoke />} /> 
        <Route path = '/password_generator' element= {<PasswordGenerator />} /> 
      </Routes>

    </>
  )
}

export default App

