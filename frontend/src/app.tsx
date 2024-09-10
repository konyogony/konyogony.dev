import { HashRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome';

export const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />
            </Routes>
        </HashRouter>
    );
};
