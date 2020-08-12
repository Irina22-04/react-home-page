import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import newStore from "./configureStore";
import i18n from "./i18n";

const {store} = newStore();

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </I18nextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
