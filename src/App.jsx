import "./index.css"
import './App.css'
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/navbar";
import Dash from "./dash";
import { useState } from "react";
import Loader from "./component/loader/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false)
  }, 5000);


  return (
    <>
    {/* {isLoading && <Loader />} */}
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Navbar" element={<Navbar />} />
    <Route path="Dashboard" element={<Dash />} />



    </Routes>
    </Router>

   
    </>
  )
}

export default App
