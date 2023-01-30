import "./product-card.scss";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const {addItemToCart} = useContext(CartContext);
  // const addProductToCart = () => addItemToCart(product);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
      <div className="single-product">
        <div className="product-photo">
          <img className="product-img" src={imageUrl} alt={`${name}`} />
          <div className="pro-action">
            <a href="#" className="action-btn">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span onClick={addProductToCart} >Add to cart</span>
            </a>
          </div>
        </div>
        <div className="product-brief">
          <h2>
            <a href="#">{name}</a>
          </h2>
          <div className="product-brief-inner">
            <h3>${price}</h3>
          </div>
        </div>
      </div>
  )
};

export default ProductCard;
