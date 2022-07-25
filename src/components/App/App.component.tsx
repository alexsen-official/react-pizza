import { Route, Routes } from 'react-router-dom';

import { Layout } from '../';
import { Cart, Home, NotFound } from '../../pages';

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
