import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

export default function NotFound() {
    return (
        <div className={ styles.root }>
            <span className={ styles.emoji }>😕</span>

            <h1>Nothing found!</h1>

            <p className={ styles.description }>
                We're fairly sure that page used to be here, but seems to have gone missing.
                We do apologize on it's behalf.
            </p>

            <Link to="/">
                <button className={ styles.backBtn }>Back</button>
            </Link>
        </div>
    );
}
