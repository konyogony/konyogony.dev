import { Layout } from '@/layouts/layout';
import { About } from '@/pages/about';
import { Docs } from '@/pages/docs';
import { Notes } from '@/pages/notes';
import { NotFound } from '@/pages/notfound';
import { Welcome } from '@/pages/welcome';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

export const App = () => {
    const ProtectedRoute = ({ component }: { component: JSX.Element }) => {
        console.log('Protected route');
        return component;
    };

    const RedirectSocial = () => {
        const { service } = useParams<{ service: string }>();
        switch (service) {
            case 'github':
                window.location.href = 'https://github.com/konyogony';
                break;
            case 'discord':
                window.location.href = 'https://discordlookup.com/user/564472732071493633/';
                break;
            case 'spotify':
                window.location.href = 'https://open.spotify.com/user/xeq03n90tcwkg4tegzdxggvzd/';
                break;
            case 'steam':
                window.location.href = 'https://steamcommunity.com/id/kony_ogony/';
                break;
            default:
                return <NotFound />;
        }
        return null;
    };

    interface route {
        path: string;
        element: JSX.Element;
        protected?: boolean;
    }

    const routes: route[] = [
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
