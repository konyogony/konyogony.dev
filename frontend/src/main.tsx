import { App } from '@/app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/css/app.css';

window.addEventListener('error', (event) => console.error(event.error));

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
