
import Form from './components/form'
import NotesProject from './components/NotesProject'
import GalleryProject from './components/GalleryProject'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import RandomJoke from './pages/RandomJoke';


function App() {

  return (
    <>
      <Routes>
        <Route path = '/gallery' element= {<GalleryProject />} /> 
        <Route path = '/Home' element= {<Home />} /> 
        <Route path = '/jokes' element= {<RandomJoke />} /> 

      </Routes>

    </>
  )
}

export default App

