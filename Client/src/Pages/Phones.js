import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsList } from "../Components/ProductsList"; // Import ProductsList
import SearchBar from "../Components/SearchBar"; // Import SearchBar
import "../Styles/products.css";

export const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/phones") ;
        setPhones(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPhones();
  }, []);

  // Filter phones based on the search term
  const filteredPhones = phones.filter((phone) =>
    phone.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Shop Phones</h1>

      {/* Add the SearchBar component */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Use the ProductsList component */}
      <ProductsList items={filteredPhones} />
    </div>
  );
};
