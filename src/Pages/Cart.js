// import { useCart } from "../context/CartContext";
// import "../Styles/products.css";

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   const handleImageError = (e) => {
//     e.target.src = "/path/to/default-image.png";
//   };

//   return (
//     <div className="page">
//       <h1>Your Cart</h1>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="cart-list">
//             {cart.map((item, i) => (
//               <li key={i} className="cart-item">
//                 <img
//                   src={item.img || "/path/to/default-image.png"}
//                   alt={item.name}
//                   onError={handleImageError}
//                 />
//                 <div>
//                   <h3>{item.name}</h3>
//                   <p>${item.price}</p>
//                 </div>

//                 <button className="btn remove" onClick={() => removeFromCart(i)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <h2>Total: ${total.toFixed(2)}</h2>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


import { useCart } from "../context/CartContext";
import "../Styles/products.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleImageError = (e) => {
    e.target.src = "/path/to/default-image.png";
  };

  return (
    <div className="page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty.</p>
          <p className="empty-cart-subtext">Add some products to get started!</p>
        </div>
      ) : (
        <div className="cart-container">
          <ul className="cart-list">
            {cart.map((item, i) => (
              <li key={i} className="cart-item">
                <img 
                  src={item.img || "/path/to/default-image.png"} 
                  alt={item.name}
                  onError={handleImageError}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>

                <button className="btn remove" onClick={() => removeFromCart(i)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;