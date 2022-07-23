import * as React from 'react';
import * as Redux from 'react-redux';
import debounce from 'lodash.debounce';

import { resetQuery, setQuery } from '../../redux/slices';
import magnifier from '../../assets/images/magnifier.svg';
import cross from '../../assets/images/cross.svg';
import styles from './Search.module.scss';

export default function Search() {
    const [value, setValue] = React.useState('');
    const dispatch = Redux.useDispatch();
    const inputRef = React.useRef();

    const onChangeQuery = React.useCallback(
        debounce(query => {
            dispatch(setQuery(query));
        }, 400),
        []
    );

    const onChangeValue = event => {
        setValue(event.target.value);
        onChangeQuery(value);
    };

    const resetSearch = () => {
        setValue('');
        dispatch(resetQuery());
        inputRef.current.focus();
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
