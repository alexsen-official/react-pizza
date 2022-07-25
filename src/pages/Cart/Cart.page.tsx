import * as Redux from 'react-redux';
import { Link } from 'react-router-dom';
import caretLeft from '../../assets/images/caret-left.svg';
import shoppingCart from '../../assets/images/shopping-cart.svg';
import trashCan from '../../assets/images/trash-can.svg';

import { CartEmpty, CartItem } from '../../components';
import { cartSelector, clearCart } from '../../redux/slices';
import styles from './Cart.module.scss';

export default function Cart() {
    const dispatch = Redux.useDispatch();
    const { items, totalCount, totalPrice } = Redux.useSelector(cartSelector);

    if (!totalCount) {
        return <CartEmpty />;
    }

    return (
        <div className={ styles.root }>
            <div className={ styles.header }>
                <h2 className={ styles.title }>
                    <img src={ shoppingCart } alt="shopping cart" />
                    <span>Cart</span>
                </h2>

                <button onClick={ () => dispatch(clearCart()) }
                        className={ styles.clearBtn }>
                    <img src={ trashCan } alt="trash can" />
                    <span>Clear cart</span>
                </button>
            </div>

            <div className={ styles.items }>
                { items.map(item =>
                    <CartItem key={ item.id } { ...item } />
                ) }
            </div>

            <div className={ styles.details }>
                <span>Total pizzas: <b>{ totalCount } pcs.</b></span>
                <span>Order price: <b className={ styles.price }>{ totalPrice } $</b></span>
            </div>

            <div className={ styles.actions }>
                <Link to="/" className={ styles.backBtn }>
                    <img src={ caretLeft } alt="caret-left" />
                    <span>Back</span>
                </Link>

                <button>
                    Pay now
                </button>
            </div>
        </div>
    );
}
