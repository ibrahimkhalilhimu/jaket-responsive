import React from 'react';
import './LastPart.css'
const LastPart = () => {
    return (
        <div className="container">
            <div className="row py-5 lastPart">
                <div className="col-md-6">
            <div className="card d-flex align-items-center mb-3">
                <div className="d-flex justify-content-between">
                    <img className="img-fluid lastPartImg" src="https://i.ibb.co/PDCWwMC/image-12.png" alt=""/>
                    <div className="pl-2">
                        <h4>Find the Perfect Fit</h4>
                        <p>Everybody is different, which is why we
                        offer styles for every body.</p>
                    </div>
                </div>
            </div>
            <div className="card d-flex align-items-center  mb-3">
                <div className="d-flex justify-content-between">
                    <img className="img-fluid lastPartImg" src="https://i.ibb.co/L5TzYc0/image-13.png" alt=""/>
                    <div className="pl-2">
                        <h4>Free Exchanges</h4>
                        <p>One of the many reasons you can shop
                    with peace of mind..</p>
                    </div>
                </div>
            </div>
            <div className="card d-flex align-items-center  mb-3">
                <div className="d-flex justify-content-between">
                    <img className="img-fluid lastPartImg" src="https://i.ibb.co/cDRRJhQ/image-14.png" alt=""/>
                    <div className="lastPartText pl-2">
                        <h4>Contact Our Seller</h4>
                        <p>They are here to help you. That's quite literally what we pay them for..</p>
                    </div>
                </div>
            </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src="https://i.ibb.co/Wv4b0F3/XMLID-1.png" alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default LastPart;