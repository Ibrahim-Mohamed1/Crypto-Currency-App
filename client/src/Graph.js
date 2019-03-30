import React, { Component } from "react"
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import { withProvider } from "./context"
ReactChartkick.addAdapter(Chart)
class Graph extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getHistoricalBTC()
        this.props.getHistoricalETH()
        this.props.getHistoricalXRP()
        this.props.getHistoricalLTC()
        this.props.getHistoricalEOS()
    }

    render() {
        const mappedBTC = this.props.BTCHISTORICAL.Data && this.props.BTCHISTORICAL.Data.map(coin => {
            const closePrice = coin.close
            return closePrice
        })

        const mappedETH = this.props.ETHHISTORICAL.Data && this.props.ETHHISTORICAL.Data.map(coin => {

            const closePrice = coin.close
            return closePrice
        })
        const mappedXRP = this.props.XRPHISTORICAL.Data && this.props.XRPHISTORICAL.Data.map(coin => {

            const closePrice = coin.close
            return closePrice
        })
        const mappedLTC = this.props.LTCHISTORICAL.Data && this.props.LTCHISTORICAL.Data.map(coin => {

            const closePrice = coin.close
            return closePrice
        })
        const mappedEOS = this.props.EOSHISTORICAL.Data && this.props.EOSHISTORICAL.Data.map(coin => {

            const closePrice = coin.close
            return closePrice
        })
        let mapped = {}
        if (this.props.currentCoin === "BTC") {
            mapped = mappedBTC
        } else if (this.props.currentCoin === "ETH") {
            mapped = mappedETH
        } else if (this.props.currentCoin === "XRP") {
            mapped = mappedXRP
        } else if (this.props.currentCoin === "LTC") {
            mapped = mappedLTC
        } else if (this.props.currentCoin === "EOS") {
            mapped = mappedEOS
        }

        return (

            <div>
                <LineChart height="480px" data={{ ...mapped }} xtitle="Days" ytitle="Price" colors={["lime", "red"]} library={{ backgroundColor: "white" }} />
            </div>
        )
    }
}
export default withProvider(Graph)