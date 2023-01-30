import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkOut-item/checkout-item";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import "./checkout.scss";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">Total: ${cartTotal}</div>
    </div>
  );
};

export default CheckOut;
