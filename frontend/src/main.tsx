import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/app.css';
import { App } from './app';

window.addEventListener('error', (event) => console.error(event.error));

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
