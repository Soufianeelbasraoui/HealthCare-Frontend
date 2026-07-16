
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import PatientList from './components/Patient/PatientList'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import AjouterPatient from './components/Patient/Ajouterpatient/Ajouterpatient'
import ModifierPatient from './components/Patient/ModifierPatient/ModifierPatient'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />

        
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>  } />
        <Route path='/dashboard/patients' element={<PatientList />} />
        <Route path="/dashboard/patients/nouveau" element={<AjouterPatient />} />
        <Route path="/dashboard/patients/modifier/:id" element={<ModifierPatient />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App