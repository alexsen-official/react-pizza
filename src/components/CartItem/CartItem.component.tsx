import * as Redux from 'react-redux';

import cross from '../../assets/images/cross.svg';
import minus from '../../assets/images/minus.svg';
import plus from '../../assets/images/plus.svg';
import { addItem, clearItem, removeItem } from '../../redux/slices';
import styles from './CartItem.module.scss';

export default function CartItem(props: CartItem) {
    const { id, imageUrl, title, type, size, price, count } = props;
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
                <button onClick={ () => dispatch(addItem(props)) }
                        className={ styles.circleBtn }>
                    <img src={ plus } alt="plus" />
                </button>

                <b>{ count }</b>

                <button onClick={ () => dispatch(removeItem(id)) }
                        className={ styles.circleBtn }>
                    <img src={ minus } alt="minus" />
                </button>
            </div>

            <b className={ styles.price }>{ price * (count || 0) } $</b>

            <button onClick={ () => dispatch(clearItem(id)) }
                    className={ `${ styles.circleBtn } ${ styles.removeBtn }` }>
                <img src={ cross } alt="cross" />
            </button>
        </div>
    );
}
