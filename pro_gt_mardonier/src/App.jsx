// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CartPage from './pages/CartPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/carrinho" element={<CartPage />} />
    </Routes>
  );
}

export default App;
