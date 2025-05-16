function CartItem({ item, setCartItems }) {
    const updateQty = (delta) => {
      setCartItems(prev =>
        prev.map(i =>
          i.id === item.id ? { ...i, qty: Math.max(i.qty + delta, 1) } : i
        )
      );
    };
  
    const removeItem = () => {
      setCartItems(prev => prev.filter(i => i.id !== item.id));
    };
  
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.name} />
        <div>
          <h4>{item.name}</h4>
          <p>Cor: {item.color} <br /> Tamanho: {item.size}</p>
          <button onClick={removeItem}>Remover item</button>
        </div>
        <div className="qty">
          <button onClick={() => updateQty(-1)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(1)}>+</button>
        </div>
        <div className="price">R$ {item.price.toFixed(2)}</div>
        <div className="price-total">R$ {(item.price * item.qty).toFixed(2)}</div>
      </div>
    );
  }
  
  export default CartItem;
  