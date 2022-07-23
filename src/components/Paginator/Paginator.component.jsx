import * as React from 'react';
import * as Redux from 'react-redux';

import { nextPage, pageSelector, prevPage, setPage } from '../../redux/slices';
import styles from './Paginator.module.scss';

export default function Paginator({ pageCount }) {
    const value = Redux.useSelector(pageSelector);
    const dispatch = Redux.useDispatch();

    const pages = [...new Array(pageCount).keys()].map(page => page + 1);

    return (
        <div className={ styles.paginator }>
            <button onClick={ () => dispatch(prevPage()) }
                    disabled={ value <= 1 }>
                { '<' }
            </button>

            { pages.map(page =>
                <button key={ page }
                        onClick={ () => dispatch(setPage(page)) }
                        className={ value === page ? styles.selected : null }>
                    { page }
                </button>
            ) }

            <button onClick={ () => dispatch(nextPage()) }
                    disabled={ value >= pageCount }>
                { '>' }
            </button>
        </div>
    );
}
