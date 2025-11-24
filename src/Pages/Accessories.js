import { useState } from "react";
import {ProductsList} from "../Components/ProductsList";
import SearchBar from "../Components/SearchBar";
import { accessories } from "../Data/Products";
import "../Styles/products.css";

export const Accessories = () => {
  const [query, setQuery] = useState("");

  const filtered = accessories.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Accessories</h1>

      <SearchBar value={query} onChange={setQuery} />

      <ProductsList title="Accessories" items={filtered} />
    </div>
  );
};
