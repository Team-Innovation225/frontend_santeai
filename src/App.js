// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adminform from "./pages/admin_form";
import Administrator from "./pages/administrator";
import Patient from "./pages/patient";
// import AuthPage from "./pages/AuthPage";
import Medecin from "./pages/medecin";
// import LoginPage from "./pages/login";
// import RegisterPage from "./pages/inscription";
import ChatAI from "./pages/chatAI";
import Teleconsultation from "./pages/tv_consuting";
import Structures from "./pages/structures";
import EditPatientProfile from "./pages/EditPatientProfile";
import AudioChatAI from "./pages/AudioChatAI"; // Ajoute cet import
// import Home from "./pages/home";
import AuthPage from "./pages/AuthPage";
import Registerstruct from "./pages/registerStruct";
import Structure from "./pages/structure";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/administrator" element={<Administrator />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin_form" element={<Adminform />} />
        <Route path="/patient" element={<Patient />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/r" element={<RegisterPage />} /> */}
        <Route path="/chatAI" element={<ChatAI />} />
        <Route path="/medecin" element={<Medecin />} />
        <Route path="/tv_consuting" element={<Teleconsultation />} />
        <Route path="/structures" element={<Structures />} />
        <Route path="/edit-patient-profile" element={<EditPatientProfile />} />
        <Route path="/registerStruct" element={<Registerstruct />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/audiochat" element={<AudioChatAI />} /> {/* Ajoute cette ligne */}

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;