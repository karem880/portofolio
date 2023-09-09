import "./index.css"
import './App.css'
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/navbar";


function App() {


  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Navbar" element={<Navbar />} />


    </Routes>
    </Router>

   
    </>
  )
}

export default App
