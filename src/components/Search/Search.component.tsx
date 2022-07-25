import debounce from 'lodash.debounce';
import * as React from 'react';
import * as Redux from 'react-redux';
import cross from '../../assets/images/cross.svg';
import magnifier from '../../assets/images/magnifier.svg';

import { resetQuery, setQuery } from '../../redux/slices';
import styles from './Search.module.scss';

export default function Search() {
    const [value, setValue] = React.useState('');
    const dispatch = Redux.useDispatch();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onChangeQuery = React.useCallback(
        debounce((query: string) => {
            dispatch(setQuery(query));
        }, 400),
        [dispatch]
    );

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChangeQuery(value);
    };

    const resetSearch = () => {
        setValue('');
        dispatch(resetQuery());
        inputRef.current?.focus();
    };

    return (
        <div className={ styles.search }>
            <img className={ styles.magnifier }
                 src={ magnifier } alt="magnifier" />

            <input value={ value }
                   ref={ inputRef }
                   onChange={ onChangeValue }
                   placeholder="Search..." />

            { value && (
                <img onClick={ resetSearch }
                     className={ styles.cross }
                     src={ cross } alt="cross" />
            ) }
        </div>
    );
}
