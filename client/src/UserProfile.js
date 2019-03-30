import React, { Component } from 'react';
import { withProvider } from "./context"
import User from "./User.png"
import Ticker from "./Ticker"

class UserProfile extends Component {

    render() {
        const convert = parseFloat(this.props.coinPrctg)
        return (

            <div className="UserProfile" style={{ borderRight: "solid 1px white", height: "100%", paddingTop: 20, marginRight: -20, marginTop: -50 }}>
                <Ticker />
                <img style={{ width: "75%", display: 'block', margin: "auto", marginTop: 15 }} src={User} alt="" />
                <h1 style={{ textAlign: "center" }}><span style={{ color: "Lime" }}> Christian </span></h1>
                <hr style={{ marginTop: "-10px", marginBottom: "-10px" }} />
                <h1 style={{ textAlign: "center", fontSize: "3em" }}>{this.props.currentCoin}</h1>


                <img style={{ width: "40%", display: 'block', margin: "auto", marginTop: 30 }} alt="" src={this.props.currentCoin && this.props.currentCoin === "BTC" ? "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" : this.props.currentCoin && this.props.currentCoin === "ETH" ? "https://colossusxt.store/wp-content/uploads/Ethereum-Logo-280x280.png" : this.props.currentCoin && this.props.currentCoin === "LTC" ? "https://cdn4.iconfinder.com/data/icons/cryptocoins/227/LTC-512.png" : this.props.currentCoin && this.props.currentCoin === "EOS" ? "https://cdn.iconscout.com/icon/free/png-256/eos-9-646062.png" : this.props.currentCoin && this.props.currentCoin === "XRP" ? "https://cdn.freebiesupply.com/logos/large/2x/ripple-2-logo-png-transparent.png" : null} />

                <h1 style={{ textAlign: "center", color: "lime" }}>{this.props.currentCoin && this.props.currentCoin === "BTC" ? this.props.coinPrice : this.props.currentCoin && this.props.currentCoin === "ETH" ? this.props.coinPrice : this.props.currentCoin && this.props.currentCoin === "LTC" ? this.props.coinPrice : this.props.currentCoin && this.props.currentCoin === "EOS" ? this.props.coinPrice : this.props.currentCoin && this.props.currentCoin === "XRP" ? this.props.coinPrice : null} </h1>

                <h1 style={convert < 0 ? { color: "red", textAlign: "center" } : { color: "green", textAlign: "center" }}>{this.props.currentCoin && this.props.currentCoin === "BTC" ? this.props.coinPrctg : this.props.currentCoin && this.props.currentCoin === "ETH" ? this.props.coinPrctg : this.props.currentCoin && this.props.currentCoin === "LTC" ? this.props.coinPrctg : this.props.currentCoin && this.props.currentCoin === "EOS" ? this.props.coinPrctg : this.props.currentCoin && this.props.currentCoin === "XRP" ? this.props.coinPrctg : null}%</h1>

                <select style={{ display: "block", margin: "auto", zoom: "200%", marginBottom:0, borderColor:"black", outline:"none", textAlign:"center" }} name="currentCoin" onChange={this.props.handleChange} value={this.props.currentCoin}>
                    <option style={{ textAlign:"center" }} value='BTC' style={{ marginTop: "1%", marginBottom: "1%", color: "#5ae0e7", textDecoration: "none" }}>Bitcoin</option>
                    <option style={{ textAlign:"center" }} value='ETH' style={{ marginTop: "1%", marginBottom: "1%", color: "#5ae0e7", textDecoration: "none" }}>Ethereum</option>
                    <option style={{ textAlign:"center" }} value='XRP' style={{ marginTop: "1%", marginBottom: "1%", color: "#5ae0e7", textDecoration: "none" }}>XRP</option>
                    <option style={{ textAlign:"center" }} value='LTC' style={{ marginTop: "1%", marginBottom: "1%", color: "#5ae0e7", textDecoration: "none" }}>Litecoin</option>
                    <option style={{ textAlign:"center" }} value='EOS' style={{ marginTop: "1%", marginBottom: "1%", color: "#5ae0e7", textDecoration: "none" }}>EOS</option>
                </select>
                <div>
            </div>
            </div>

        )
    }
}

export default withProvider(UserProfile);