import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="container header">
            <div className="row pt-5">
                <div className="col-12 col-md-6 ">
                <h3 >BE THE PENGUINS  <br/> <span style={{color:"black"}}>OF WINTER</span></h3>
                <p>Lorem Ipsum is simply dummy text of the printing <br/>
                and typesetting industry.</p>
                <button className="btn"><img className='shoppingCart' src="https://i.ibb.co/RDV2zHD/shopping-cart-1.png" alt=""/> Buy Now</button>
                </div>
                <div className="col-12 col-md-6">
        <img src="https://i.ibb.co/F5vk8yh/green.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;