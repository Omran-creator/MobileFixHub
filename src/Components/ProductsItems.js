import { useCart } from "../context/CartContext";
import "../Styles/products.css";

export const ProductsItems = ({ item }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item);
    };

    return (
        <div className="product-card">
            <div
                className="product-image-background"
                style={{
                    backgroundImage: `url(${item.img || item.image || "/path/to/default-image.png"})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Image is now the background */}
            </div>

            <div className="product-info-overlay">
                <h3>{item.name}</h3>
                <p className="brand">Brand: {item.brand}</p>
                {item.condition && <p className="condition">Condition: {item.condition}</p>}
                {item.price ? (
                    <p className="price">${item.price}</p>
                ) : item.location ? (
                    <p className="location">📍 {item.location}</p>
                ) : null}

                {/* Display specs in a more organized way */}
                {item.specs && Object.keys(item.specs).length > 0 && (
                    <div className="specs">
                        <h4>Specifications:</h4>
                        <ul>
                            {item.specs.storage && <li>Storage: {item.specs.storage}</li>}
                            {item.specs.ram && <li>RAM: {item.specs.ram}</li>}
                            {item.specs.screen && <li>Screen: {item.specs.screen}</li>}
                            {item.specs.battery && <li>Battery: {item.specs.battery}</li>}
                        </ul>
                    </div>
                )}

                {/* Compatible devices */}
                {item.compatible && (
                    <div className="compatible">
                        <strong>Compatible with:</strong> {item.compatible.join(", ")}
                    </div>
                )}

                {/* Category */}
                {item.category && (
                    <div className="category">
                        <strong>Category:</strong> {item.category}
                    </div>
                )}
            </div>

            <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}