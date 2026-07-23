
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
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
import Unauthorized from './pages/Unauthorized/Unauthorized'
import NotFound from './pages/NotFound/NotFound'
import ConsulterDossier from './components/DossierMedical/ConsulterDossier/ConsulterDossier'
import ListeDossiers from './components/DossierMedical/ListeDossiers/ListeDossiers'


function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/unauthorized' element={<Unauthorized/>}/>
        </Route>

        
        <Route path='/dashboard' element={<ProtectedRoute roles={["ADMIN"]}><Dashboard /></ProtectedRoute>  } />
        <Route path='/dashboard/patients' element={<ProtectedRoute roles={["ADMIN"]}><PatientList /></ProtectedRoute> } />
        <Route path="/dashboard/patients/nouveau" element={<ProtectedRoute roles={["ADMIN"]}><AjouterPatient /></ProtectedRoute>} />
        <Route path="/dashboard/patients/modifier/:id" element={<ProtectedRoute roles={["ADMIN","PATIENT"]}><ModifierPatient /></ProtectedRoute>}/>
        <Route path="/dashboard/patients/ShowPatinet/:id" element={<ProtectedRoute roles={["ADMIN","PATIENT"]}><ShowPatinet/></ProtectedRoute>}/>

        <Route path='/dashboard/medecinsList' element={<ProtectedRoute roles={["ADMIN"]}><Medecins/></ProtectedRoute>}/>
        <Route path='/dashboard/medecinsList/nouveau' element={<ProtectedRoute roles={["ADMIN"]}><AjouterMedecin/></ProtectedRoute>}/>
        <Route path='/dashboard/medecinsList/modifier/:id' element={<ProtectedRoute roles={["ADMIN"]}><ModifierMedecin/></ProtectedRoute>}/>
        <Route path='/dashboard/medecinsList/consulterMedecin/:id' element={<ProtectedRoute roles={["ADMIN"]}><ConsulterMedecin/></ProtectedRoute>}/>

        <Route path='/dashboard/rendezVous' element={<ProtectedRoute roles={['ADMIN','MEDECIN','PATIENT']}><RendezVous/></ProtectedRoute>}/>
        <Route path='/dashboard/rendezVous/nouveau' element={<ProtectedRoute roles={['ADMIN']}><AjouterRdv/></ProtectedRoute>}/>
        <Route path='/dashboard/rendezVous/modifier/:id' element={<ProtectedRoute roles={["ADMIN"]}><ModifierRdv/></ProtectedRoute>}/>
        <Route path="/dashboard/dossiers" element={<ProtectedRoute roles={['ADMIN',"MEDECIN"]}><ListeDossiers/></ProtectedRoute>} />
        <Route path='/dashboard/dossiers/ConsulterDossier/:id' element={<ProtectedRoute roles={["ADMIN","MEDECIN"]}><ConsulterDossier/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App