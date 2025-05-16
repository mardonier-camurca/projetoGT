import React from "react";

export function RelatedProducts() {
    const products = new Array(4).fill({
      id: 1,
      name: "K-Swiss V8 - Masculino",
      oldPrice: 200,
      price: 100,
      image: "/images/k-swiss.png"
    });
  
    return (
      <div className="related-products">
        <h3>Produtos Relacionados</h3>
        <div className="products-list">
          {products.map((product, i) => (
            <div key={i} className="product-card">
              {i === 0 && <span className="badge">30% OFF</span>}
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p className="old-price">R$ {product.oldPrice}</p>
              <p className="price">R$ {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  