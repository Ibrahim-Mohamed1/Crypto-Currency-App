import React from 'react';
import Graph from "./Graph"
import { withProvider } from "./context"
import Coins from "./Coins"
import { Link } from "react-router-dom"

const CoinInfo = (props) => {
    return (
        <div className='CoinInfo'>
            <div className="navbar">
                <Link to="/" style={{color:"lime"}}>Home</Link>
                <Link to="/news">News</Link>
                <Link to="/about">About</Link>
            </div>
            <Graph style={{ height: "62vh", marginLeft: "3%", marginRight: "0%" }} />
            <Coins />

        </div>
    );
};

export default withProvider(CoinInfo);