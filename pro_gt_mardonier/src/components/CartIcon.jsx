// src/components/CartIcon.jsx
import { useNavigate } from 'react-router-dom';

function CartIcon() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/carrinho');
  };

  return (
    <button onClick={handleClick} aria-label="Carrinho de Compras">
      🛒
    </button>
  );
}

export default CartIcon;
