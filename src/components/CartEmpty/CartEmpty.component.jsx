import * as React from 'react';
import { Link } from 'react-router-dom';

import emptyCart from '../../assets/images/empty-cart.png';
import styles from './CartEmpty.module.scss';

export default function CartEmpty() {
    return (
        <div className={ styles.root }>
            <h2>Cart is empty <icon>😕</icon></h2>
            <p>You probably haven't ordered pizza yet. To order pizza, go to the main page.</p>
            <img src={ emptyCart } alt="empty cart" />

            <button>
                <Link to="/">Back</Link>
            </button>
        </div>
    );
}
