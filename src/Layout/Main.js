import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;