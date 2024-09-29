import { Layout } from '@/layouts/layout';
import { About } from '@/pages/about';
import { Docs } from '@/pages/docs';
import { Notes } from '@/pages/notes';
import { NotFound } from '@/pages/notfound';
import { Welcome } from '@/pages/welcome';
import { Route as RouteType } from '@/types';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';

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
            <Layout>
                <Routes>
                    {routes.map((v, i) => {
                        return (
                            <Route
                                key={i}
                                path={v.path}
                                element={v.protected ? <ProtectedRoute component={v.element} /> : v.element}
                            />
                        );
                    })}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
