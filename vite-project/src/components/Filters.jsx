import React from "react";


const Filters = ({
  search,
  setSearch,
  selectedColors,
  setSelectedColors,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
  availableColors,
}) => {
  const handleColorChange = (color) => {
    setSelectedColors((prev) => {
      if (prev.includes(color)) {
        return prev.filter((c) => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

  return (
    <div className="filters">
      <div className="color-filters">
        {availableColors.map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
      <div className="price-filter">
        <input
          type="number"
          placeholder="Минимум"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
        />
        <input
          type="number"
          placeholder="Максимум"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
        />
      </div>
      <div className="sort-filter">
        <label>
          Сортировать по:
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="cheap">Сначала дешевые</option>
            <option value="expensive">Сначала дорогие</option>
            <option value="popular">Сначала популярные</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filters;