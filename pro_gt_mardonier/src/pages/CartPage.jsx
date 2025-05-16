import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { RelatedProducts } from "../components/RelatedProducts";
import { getCartItems } from "../services/supabaseClient.js"
import "../styles/cart.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      const items = await getCartItems(); // Supondo retorno com estrutura [{ id, name, price, image, qty }]
      setCartItems(items);
    }

    fetchCart();
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = 30;
  const total = subtotal - discount;

  return (
    <div className="cart-container">
      <div className="cart-main">
        <h2>Meu Carrinho</h2>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} setCartItems={setCartItems} />
        ))}

        <div className="cart-tools">
          <div className="coupon">
            <input placeholder="Insira seu código" />
            <button>OK</button>
          </div>
          <div className="shipping">
            <input placeholder="Insira seu CEP" />
            <button>OK</button>
          </div>
        </div>
      </div>

      <div className="cart-summary">
        <h3>Resumo</h3>
        <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
        <p>Frete: R$ 0,00</p>
        <p>Desconto: R$ {discount.toFixed(2)}</p>
        <h4>Total: <span className="total">R$ {total.toFixed(2)}</span></h4>
        <button className="checkout">Continuar</button>
      </div>

      <RelatedProducts />
    </div>
  );
}

export default CartPage;
