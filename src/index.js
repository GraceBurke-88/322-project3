import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import VariablePage from "./components/pages/VariablePage";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/" exact component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
                <Route path="/page/:id" component={VariablePage} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);