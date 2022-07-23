import * as React from 'react';
import { useRef } from 'react';
import * as Redux from 'react-redux';

import { setSort, sortSelector } from '../../redux/slices';
import caretDown from '../../assets/images/caret-down.svg';
import styles from './Sort.module.scss';

export const sortOptions = [
    { name: 'popularity (asc)', key: 'rating', order: 'asc' },
    { name: 'popularity (desc)', key: 'rating', order: 'desc' },
    { name: 'price (asc)', key: 'price', order: 'asc' },
    { name: 'price  (desc)', key: 'price', order: 'desc' },
    { name: 'alphabet (asc)', key: 'title', order: 'asc' },
    { name: 'alphabet (desc)', key: 'title', order: 'desc' }
];

export default function Sort() {
    const value = Redux.useSelector(sortSelector);
    const dispatch = Redux.useDispatch();
    const sortRef = useRef();

    const [visible, setVisible] = React.useState(false);

    const setOption = (option) => {
        dispatch(setSort(option));
        setVisible(false);
    };

    React.useEffect(() => {
        const listener = event => {
            if (!event.path.includes(sortRef.current)) {
                setVisible(false);
            }
        };

        document.body.addEventListener('click', listener);

        return () => {
            document.body.removeEventListener('click', listener);
        };
    }, []);

    return (
        <div ref={ sortRef } className={ styles.sort }>
            <div className={ styles.label }>
                <img src={ caretDown } className={ visible ? styles.upward : null } alt="caret down" />
                <b>Sort by:</b>
                <span onClick={ () => setVisible(!visible) }>{ value.name }</span>
            </div>

            { visible && (
                <ul className={ styles.popup }>
                    { sortOptions.map(option =>
                        <li key={ option.name }
                            onClick={ () => setOption(option) }
                            className={ value.name === option.name ? styles.selected : null }>
                            { option.name }
                        </li>
                    ) }
                </ul>
            ) }
        </div>
    );
}
