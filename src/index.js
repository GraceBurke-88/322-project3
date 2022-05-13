import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';

import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";
import VariablePage from "./components/pages/VariablePage";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
                <Route path="/page/:id" element={<VariablePage />} />

            </Routes>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);