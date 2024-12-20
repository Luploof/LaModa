import React, { useState } from "react";
import productsData from "./data/products";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";

const App = () => {
  const [search, setSearch] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 9999]);
  const [sortOrder, setSortOrder] = useState("cheap");
  const availableColors = [...new Set(productsData.map(product => product.color))];
  
     
  const filters = [
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()),
    (product) =>
      selectedColors.length === 0 || selectedColors.includes(product.color),
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1],
  ];

  const applyFilters = (products) => {
    return products.filter((product) =>
      filters.every((filter) => filter(product))
    );
  };

  const sortProducts = (products) => {
    const filteredProducts = applyFilters(products);
    switch (sortOrder) {
      case "cheap":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "expensive":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };

  const filteredAndSortedProducts = sortProducts(productsData);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="layout">
        <Filters
          search={search}
          setSearch={setSearch}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          availableColors={availableColors}
        />
        <ProductList products={filteredAndSortedProducts} />
      </div>
    </div>
  );
};

export default App;
