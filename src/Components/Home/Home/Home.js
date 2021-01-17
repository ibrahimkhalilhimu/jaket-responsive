import React from 'react';
import Header from '../Header/Header';
import LastPart from '../LastPart/LastPart';
import ManJaket from '../ManJaket/ManJaket';
import Navbar from '../Navbar/Navbar';
import WomanJaket from '../WomanJaket/WomanJaket';
import './Home.css'
const Home = () => {
    return (
        <div>
           <div className="headerSide">
           <Navbar></Navbar>
            <Header></Header>
           </div>
           <WomanJaket/>
           <ManJaket/>
           <LastPart/>
        </div>
    );
};

export default Home;