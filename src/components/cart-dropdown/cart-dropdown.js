import './cart-dropdown.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();
     const goToCheckoutHandler = () => {
        navigate('/checkout')
     }
   
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map ((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;