import { useState } from "react";
import {ProductsList} from "../Components/ProductsList";
import SearchBar from "../Components/SearchBar";
import { phones } from "../Data/Products";
import "../Styles/products.css";

export const Phones = () => {
  const [query, setQuery] = useState("");

  const filtered = phones.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Shop Phones</h1>

      <SearchBar value={query} onChange={setQuery} />

      <ProductsList title="Shop Phones" items={filtered} />
    </div>
  );
};

