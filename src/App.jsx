import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import VolunteerOppsPage from "./Component/VolunteerOppsPage.jsx";
import NavBarBS from "./Component/NavBarBS.jsx";

export default function App(){
  return (
  <div>
   
    <Routes>  
      
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<VolunteerOppsPage />} />
    </Routes>
    </div>
  );
}