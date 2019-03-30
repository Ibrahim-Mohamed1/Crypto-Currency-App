import React, { Component } from 'react';
import { withProvider } from './context';


class Ticker extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getCoinData()
    }

    render() {
        const slicedBTC = this.props.BTC.CHANGE24HOUR !== undefined ? this.props.BTC.CHANGE24HOUR.slice(2) : null;
        const slicedETH = this.props.coins.length !== 0 ? this.props.coins.DISPLAY.ETH.USD.CHANGE24HOUR.slice(2) : null;
        const slicedXRP = this.props.coins.length !== 0 ? this.props.coins.DISPLAY.XRP.USD.CHANGE24HOUR.slice(2) : null;
        const slicedLTC = this.props.coins.length !== 0 ? this.props.coins.DISPLAY.LTC.USD.CHANGE24HOUR.slice(2) : null;
        const slicedEOS = this.props.coins.length !== 0 ? this.props.coins.DISPLAY.EOS.USD.CHANGE24HOUR.slice(2) : null;
        const convert1 = parseFloat(slicedBTC)
        const convert2 = parseFloat(slicedETH)
        const convert3 = parseFloat(slicedXRP)
        const convert4 = parseFloat(slicedLTC)
        const convert5 = parseFloat(slicedEOS)
        return (
            <div style={{ marginTop: 18, marginBottom:0 }}>
                {this.props.coins.length !== 0 ? <marquee><span>{this.props.BTCname}</span> <span style={convert1 < 0 ? { color: "red" } : { color: "lime" }}>{this.props.BTC.CHANGE24HOUR}</span> {this.props.ETHname} <span style={convert2 < 0 ? { color: "red" } : { color: "lime" }}>{this.props.coins.DISPLAY.ETH.USD.CHANGE24HOUR}</span> {this.props.XRPname} <span style={convert3 < 0 ? { color: "red" } : { color: "lime" }}>{this.props.coins.DISPLAY.XRP.USD.CHANGE24HOUR}</span> {this.props.LTCname} <span style={convert4 < 0 ? { color: "red" } : { color: "lime" }}>{this.props.coins.DISPLAY.LTC.USD.CHANGE24HOUR}</span> {this.props.EOSname} <span style={convert5 < 0 ? { color: "red" } : { color: "lime" }}>{this.props.coins.DISPLAY.EOS.USD.CHANGE24HOUR}</span></marquee> : 'loading'}
            </div>
        )
    }
}

export default withProvider(Ticker)
