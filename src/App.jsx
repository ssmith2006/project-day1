import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import VolunteerOppsPage from "./Component/VolunteerOppsPage.jsx";


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