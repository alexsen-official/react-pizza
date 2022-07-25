import * as React from 'react';
import * as Redux from 'react-redux';
import plus from '../../assets/images/plus.svg';

import { addItem, cartItemSelector } from '../../redux/slices';
import styles from './Pizza.module.scss';

const typeLabels = ['thin', 'traditional'];

export default function Pizza({ id, imageUrl, title, types, sizes, price }: Pizza) {
    const item = Redux.useSelector(cartItemSelector(id));
    const dispatch = Redux.useDispatch();

    const count = item?.count || 0;

    const [selectedType, selectType] = React.useState(types[0]);
    const [selectedSize, selectSize] = React.useState(sizes[0]);

    const onAdd = () => {
        const item: CartItem = {
            id,
            imageUrl,
            title,
            price,
            type: typeLabels[selectedType],
            size: selectedSize,
            count
        };

        dispatch(addItem(item));
    };

    return (
        <div>
            <img className={ styles.thumbnail } src={ imageUrl } alt="pizza" />

            <div className={ styles.title }>
                <h4>{ title }</h4>
            </div>

            <div className={ styles.selector }>
                <ul>
                    { types.map(type =>
                        <li key={ type }
                            onClick={ () => selectType(type) }
                            className={ selectedType === type ? styles.selected : null }>
                            { typeLabels[type] }
                        </li>
                    ) }
                </ul>

                <ul>
                    { sizes.map(size =>
                        <li key={ size }
                            onClick={ () => selectSize(size) }
                            className={ selectedSize === size ? styles.selected : null }>
                            { size } in.
                        </li>
                    ) }
                </ul>
            </div>

            <div className={ styles.footer }>
                <span className={ styles.price }>{ price }$</span>

                <button onClick={ onAdd }
                        className={ `${ styles.addBtn } ${ styles.outlineBtn }` }>
                    <img src={ plus } alt="plus" />
                    <span>Add</span>
                    { count > 0 && <i>{ count }</i> }
                </button>
            </div>
        </div>
    );
}
