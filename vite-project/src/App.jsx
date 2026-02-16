import { BrowserRouter, Routes, Route } from "react-router-dom";
import Q1 from "./Components/Question1";
import Q2 from "./Components/Question2";
import Q3 from "./Components/Question3";
import Q4 from "./Components/Question4";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>} />
        <Route path="/Q1" element={<Q1/>} />
        <Route path="/Q2" element={<Q2/>} />
        <Route path="/Q3" element={<Q3/>} />
        <Route path="/Q4" element={<Q4/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;