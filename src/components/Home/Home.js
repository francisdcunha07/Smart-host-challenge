import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import OccupancyContextProvider from '../../context/HotelContext';
import Layout from '../Layout/Layout';

const Home = () => {
    return (
        <React.Fragment>
            <OccupancyContextProvider>
                <NavBar />
                <Layout />
            </OccupancyContextProvider>
        </React.Fragment>
    );
}

export default Home;
