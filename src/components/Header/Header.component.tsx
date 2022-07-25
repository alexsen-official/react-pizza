import * as Redux from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Search } from '../';
import pizzaLogo from '../../assets/images/pizza-logo.svg';
import shoppingCart from '../../assets/images/shopping-cart.svg';
import { cartSelector } from '../../redux/slices';
import styles from './Header.module.scss';

export default function Header() {
    const { totalCount, totalPrice } = Redux.useSelector(cartSelector);
    const { pathname } = useLocation();

    return (
        <header>
            <Link to="/" className={ styles.logo }>
                <img src={ pizzaLogo } alt="pizza logo" />

                <div>
                    <h1>React Pizza</h1>
                    <p>The most delicious pizza</p>
                </div>
            </Link>

            { pathname !== '/cart' && <Search /> }

            <Link to="/cart" className={ styles.cart }>
                <button>
                    <span>{ totalPrice } $</span>
                    <hr />
                    <img src={ shoppingCart } alt="shopping cart" />
                    <span>{ totalCount }</span>
                </button>
            </Link>
        </header>
    );
}
