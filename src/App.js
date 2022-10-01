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
  const navigate = useNavigate();
  return (
    <div className="App" class="bg-gray-200 w-full h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage navigate={navigate} />} />
        <Route path="login" element={<LoginPage  navigate={navigate} />}  />
        <Route path="signup" element={<SignupPage  navigate={navigate} />}  />
        <Route path="home" element={<HomePage  navigate={navigate}/>}  />
        <Route path="battle" element={<BattlePage  navigate={navigate} />}  />
        <Route path="army" element={<ArmyPage  navigate={navigate}/>}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;