import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";

//Home , Signup, Mypage

const isAuthenticated = () => !!localStorage.getItem('token');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/signup"
          element={isAuthenticated() ? <Navigate to="/mypage" /> : <Signup />}
        />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
