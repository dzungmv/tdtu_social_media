import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';

const root = createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <>
            <App />
            <ToastContainer />
        </>
    </GlobalStyles>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
