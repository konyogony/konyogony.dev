import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { DocsLayout } from './layouts/docsLayout';
import { Layout } from './layouts/layout';
import { Docs } from './pages/docs';
import { Notes } from './pages/notes';
import { NotFound } from './pages/notfound';
import { Welcome } from './pages/welcome';

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

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* Public routes */}
                    <Route path='/' element={<Welcome />} />
                    <Route
                        path='/docs/*'
                        element={
                            <DocsLayout>
                                <Docs />
                            </DocsLayout>
                        }
                    />

                    {/* Protected routes */}
                    <Route path='/notes' element={<ProtectedRoute component={<Notes />} />} />

                    {/* Social redirect */}
                    <Route path='/social/:service' element={<RedirectSocial />} />

                    {/* Not found */}
                    <Route path='404' element={<NotFound />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
