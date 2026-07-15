
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PatientList from './components/Patient/PatientList'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/patientList' element={<PatientList/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
