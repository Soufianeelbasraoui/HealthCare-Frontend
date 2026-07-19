
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
import ShowPatinet from './components/Patient/Consulter/ShowPatient'
import Medecins from './components/Medecien/Medecins'
import AjouterMedecin from './components/Medecien/AjouterMedecin/AjouterMedecin'
import ModifierMedecin from './components/Medecien/ModifierMedecin/ModifierMedecin'
import ConsulterMedecin from './components/Medecien/ConsulterMedecin/ConsulterMedecin'
import RendezVous from './components/Rendez-vous/Rendez-vous'
import AjouterRdv from './components/Rendez-vous/AjouterRdv/AjouterRdv'
import ModifierRdv from './components/Rendez-vous/ModifierRdv/ModifierRdv'



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
        <Route path='/dashboard/patients' element={<ProtectedRoute><PatientList /></ProtectedRoute> } />
        <Route path="/dashboard/patients/nouveau" element={<ProtectedRoute><AjouterPatient /></ProtectedRoute>} />
        <Route path="/dashboard/patients/modifier/:id" element={<ProtectedRoute><ModifierPatient /></ProtectedRoute>}/>
        <Route path="/dashboard/patients/ShowPatinet/:id" element={<ProtectedRoute><ShowPatinet/></ProtectedRoute>}/>

        <Route path='/dashboard/medecinsList' element={<Medecins/>}/>
        <Route path='/dashboard/medecinsList/nouveau' element={<AjouterMedecin/>}/>
        <Route path='/dashboard/medecinsList/modifier/:id' element={<ModifierMedecin/>}/>
        <Route path='/dashboard/medecinsList/consulterMedecin/:id' element={<ConsulterMedecin/>}/>

        <Route path='/dashboard/rendezVous' element={<RendezVous/>}/>
        <Route path='/dashboard/rendezVous/nouveau' element={<AjouterRdv/>}/>
        <Route path='/dashboard/rendezVous/modifier/:id' element={<ModifierRdv/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App