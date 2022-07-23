import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Cart, Home, NotFound } from '../../pages';
import { Layout } from '../';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={ <Layout /> }>
                <Route path="/" element={ <Home /> } />
                <Route path="/cart" element={ <Cart /> } />
                <Route path="*" element={ <NotFound /> } />
            </Route>
        </Routes>
    );
}
