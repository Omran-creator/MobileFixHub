import { useState } from "react";
import {ProductsList} from "../Components/ProductsList";
import SearchBar from "../Components/SearchBar";
import { parts } from "../Data/Products";
import "../Styles/products.css";

export const Parts = () => {
  const [query, setQuery] = useState("");

  const filtered = parts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Replacement Parts</h1>

      <SearchBar value={query} onChange={setQuery} />

      <ProductsList title="Replacement Parts" items={filtered} />
    </div>
  );
};


