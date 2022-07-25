import * as Redux from 'react-redux';

import { categorySelector, setCategory } from '../../redux/slices';
import styles from './Categories.module.scss';

export const categories: Category[] = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Meat' },
    { id: 2, name: 'Vegetarian' },
    { id: 3, name: 'Grill' },
    { id: 4, name: 'Spicy' },
    { id: 5, name: 'Closed' }
];

export default function Categories() {
    const value = Redux.useSelector(categorySelector);
    const dispatch = Redux.useDispatch();

    return (
        <ul className={ styles.categories }>
            { categories.map(category =>
                <li key={ category.id }
                    onClick={ () => dispatch(setCategory(category)) }
                    className={ value.id === category.id ? styles.selected : null }>
                    { category.name }
                </li>
            ) }
        </ul>
    );
}
