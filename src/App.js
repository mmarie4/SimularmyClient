import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./views/Header";
import LandingPage from "./views/LandingPage";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage";
import HomePage from "./views/HomePage";
import BattlePage from "./views/BattlePage";
import ArmyPage from "./views/ArmyPage";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App" class="bg-gray-200 w-full h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage  />}  />
        <Route path="signup" element={<SignupPage  />}  />
        <Route path="home" element={<HomePage  />}  />
        <Route path="battle" element={<BattlePage  />}  />
        <Route path="army" element={<ArmyPage  />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;