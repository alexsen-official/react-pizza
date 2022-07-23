import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../';
import styles from './Layout.module.scss';

export default function Layout() {
    return (
        <div className={ styles.wrapper }>
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
}
