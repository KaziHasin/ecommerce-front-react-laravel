import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Home from './component/Home';
import PasswordReset from './component/PasswordReset';
import ForgotPassword from './component/ForgotPassword';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset/:token" element={<PasswordReset />} />
        <Route path="/login/forgotpassword" element={<ForgotPassword />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;