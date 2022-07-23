import * as React from 'react';
import * as Redux from 'react-redux';

import { addItem, clearItem, removeItem } from '../../redux/slices';
import cross from '../../assets/images/cross.svg';
import minus from '../../assets/images/minus.svg';
import plus from '../../assets/images/plus.svg';
import styles from './CartItem.module.scss';

export default function CartItem({ id, imageUrl, title, type, size, price, count }) {
    const dispatch = Redux.useDispatch();

    return (
        <div className={ styles.root }>
            <div className={ styles.info }>
                <img className={ styles.thumbnail } src={ imageUrl } alt="pizza" />

                <div>
                    <h3>{ title }</h3>
                    <p>{ type }, { size } см.</p>
                </div>
            </div>

            <div className={ styles.count }>
                <button onClick={ () => dispatch(addItem({ id })) }
                        className={ styles.circleBtn }>
                    <img src={ plus } alt="plus" />
                </button>

                <b>{ count }</b>

                <button onClick={ () => dispatch(removeItem({ id })) }
                        className={ styles.circleBtn }>
                    <img src={ minus } alt="minus" />
                </button>
            </div>

            <b className={ styles.price }>{ price * count } $</b>

            <button onClick={ () => dispatch(clearItem({ id })) }
                    className={ `${ styles.circleBtn } ${ styles.removeBtn }` }>
                <img src={ cross } alt="cross" />
            </button>
        </div>
    );
}
