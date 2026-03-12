import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/reusable-Components/ProductCard";
import './Shop.css'

const Shop = () => {

  const products = useSelector((state) => state.products.allproducts);

  const [category, setCategory] = useState("all");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="shop-container">
    <h1 className="fw-lighter text-center m-3">Shop Now</h1>
      {/* filter buttons */}
      <div className="shop-filter text-center">

        <button className="btn btn-dark me-2" onClick={() => setCategory("all")}>
          All Products
        </button>

        <button className="btn btn-danger me-2" onClick={() => setCategory("men's clothing")}>
          Men
        </button>

        <button className="btn btn-info " onClick={() => setCategory("women's clothing")}>
          Women
        </button>

      </div>

      {/* products grid */}
      <div className="products-grid">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}

      </div>

    </div>
  );
};

export default Shop;