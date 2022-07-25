import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components';
import { store } from './redux/store';
import './scss/styles.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <BrowserRouter>
            <Provider store={ store }>
                <App />
            </Provider>
        </BrowserRouter>
    );
}
else {
    throw new Error('Root element not found!');
}
