import React from 'react';
import Graph from "./Graph"
import { withProvider } from "./context"
import Coins from "./Coins"

const CoinInfo = (props) => {
    return (
        <div className='CoinInfo'>
            <Graph style={{ height: "62vh", marginLeft: "3%", marginRight: "0%" }} />
            <Coins />

        </div>
    );
};

export default withProvider(CoinInfo);