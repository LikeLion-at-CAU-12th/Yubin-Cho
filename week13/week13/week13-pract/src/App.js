import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import MyPage from "./pages/Mypage";

function App() {
  return (
<Layout>
  <Routes>
    <Route path = "/" element={<Home />}  />
    <Route path = "mypage" element={<MyPage />} />
  </Routes>
</Layout>
  );
}

export default App;
