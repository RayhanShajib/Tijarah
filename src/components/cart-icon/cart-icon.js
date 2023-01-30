import './cart-icon.scss';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const ToggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return(
        <div className='cart-icon-container' onClick={ToggleIsCartOpen}>
            <ShoppingIcon className='shoppping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;