import { Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import { lazy } from 'react';
import Dashboard from './pages/dashboard';
import { Toaster } from './components/ui/sonner';

const Auth = lazy(() => import('./pages/auth'));
const Home = lazy(() => import('./pages/home'));

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
            <Toaster className='top=center'/>
        </>
    );
};

export default App;
