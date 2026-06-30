
import Form from './components/form'
import NotesProject from './components/NotesProject'
import GalleryPage from './pages/GalleryPage'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import RandomJoke from './pages/RandomJoke';
import PasswordGenerator from './features/PasswordGenerator/pages/PasswordGenerator';
import Login from './features/auth/login-register/pages/Login';
import ProtectedRoute from './features/auth/ProtectedRoute';

function App() {  

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <GalleryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jokes"
          element={
            <ProtectedRoute>
              <RandomJoke />
            </ProtectedRoute>
          }
        />
        <Route
          path="/password_generator"
          element={
            <ProtectedRoute>
              <PasswordGenerator />
            </ProtectedRoute>
          }
        />
      </Routes>

    </>
  )
}

export default App

