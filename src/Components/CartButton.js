import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const CartButton = () => {
  const { cart } = useCart();

  return (
    <Link to="/cart" className="cart-button">
      🛒 Cart ({cart.length})
    </Link>
  );
};


