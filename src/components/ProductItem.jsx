import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Категория: {product.category}</p>
      <p>Цена: {product.price} BYN</p>
      <p>Рейтинг: {product.rating}</p>
    </div>
  );
};

export default ProductItem;