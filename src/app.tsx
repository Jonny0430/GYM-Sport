import { Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import { lazy } from 'react';

const Auth = lazy(() => import('./pages/auth'));
const Home = lazy(() => import('./pages/home'));

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </>
    );
};

export default App;
