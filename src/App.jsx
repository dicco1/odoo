import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/NavbarLayout";
import Home from "./Pages/Home/Home";
import FooterLayout from "./Layout/FooterLayout";
import Fanlar from "./Pages/Subjects/Subjects";
import SubjectDetail from "./Pages/Subjects/SubjectDetail";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/About/About";
import Narxlar from "./Pages/Narxlar/Narxlar"



// import Fanlar from "./pages/Fanlar";
// import Register from "./pages/Register";


function App() {
  return (
    <Router>
     

      <Navbar />
     
   
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fanlar" element={<Fanlar />} />
        <Route path="/fanlar/:id" element={<SubjectDetail />} />
       <Route path="/register" element={<Register />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<AboutUs />} />
        <Route path="/narxlar" element={<Narxlar />} />
      </Routes>
      <FooterLayout/>
    </Router>
  );
}

export default App;
