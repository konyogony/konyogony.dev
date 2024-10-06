import { FallbackProvider } from '@/components/custom/fallbackProvider';
import { Layout } from '@/layouts/layout';
import { Route as RouteType } from '@/types';
import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import 'nprogress/nprogress.css';

// import { About } from './pages/about';
// import { Docs } from './pages/docs';
// import { Notes } from './pages/notes';
// import { NotFound } from './pages/notfound';
// import { Welcome } from './pages/welcome';

const ProtectedRoute = ({ component }: { component: JSX.Element }) => {
    console.log('Protected route');
    return component;
};

const RedirectSocial = () => {
    const { service } = useParams<{ service: string }>();
    switch (service) {
        case 'github':
            return <Navigate to='https://github.com/konyogony' />;
        case 'discord':
            return <Navigate to='https://discordlookup.com/user/564472732071493633/' />;
        case 'spotify':
            return <Navigate to='https://open.spotify.com/user/xeq03n90tcwkg4tegzdxggvzd/' />;
        case 'steam':
            return <Navigate to='https://steamcommunity.com/id/kony_ogony/' />;
        default:
            return <NotFound />;
    }
};

const Welcome = lazy(() => import('./pages/welcome').then((module) => ({ default: module.Welcome })));
const About = lazy(() => import('./pages/about').then((module) => ({ default: module.About })));
const Notes = lazy(() => import('./pages/notes').then((module) => ({ default: module.Notes })));
const Docs = lazy(() => import('./pages/docs').then((module) => ({ default: module.Docs })));
const NotFound = lazy(() => import('./pages/notfound').then((module) => ({ default: module.NotFound })));

const routes: RouteType[] = [
    {
        path: '/',
        element: <Welcome />,
    },
    {
        path: '/docs/*',
        element: <Docs />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/notes',
        element: <Notes />,
        protected: true,
    },
    {
        path: '/social/:service',
        element: <RedirectSocial />,
    },
    {
        path: '404',
        element: <NotFound />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export const App = () => {
    return (
        <BrowserRouter>
            <FallbackProvider>
                <Routes>
                    {routes.map((v, i) => {
                        return (
                            <Route
                                path={v.path}
                                key={i}
                                element={
                                    <Layout>
                                        {v.protected ? <ProtectedRoute component={v.element} /> : v.element}
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </FallbackProvider>
        </BrowserRouter>
    );
};

// TODO: Fix navbar dissapearing when loading
