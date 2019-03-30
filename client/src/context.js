import React, { Component } from 'react'
import axios from 'axios'
const { Consumer, Provider } = React.createContext();


export default class GlobalProvider extends Component {
  state = {
    coins: [],
    coinNames: [],
    currentCoin: "BTC",
    BTCHISTORICAL: [],
    ETHHISTORICAL: [],
    XRPHISTORICAL: [],
    LTCHISTORICAL: [],
    EOSHISTORICAL: [],
    BTC: [],
    ETH: [],
    XRP: [],
    LTC: [],
    EOS: [],
    BTCname: 'Bitcoin',
    ETHname: 'Ethereum',
    XRPname: 'Ripple',
    LTCname: 'LiteCoin',
    EOSname: 'EOS',
    coinPrice: '',
    coinVolume: '',
    coinHigh: '',
    coinLow: '',
    coinMrkcap: '',
    coinPrctg: '',
    coinOpen: '',
    coinPriceChng: '',
    news: []
  }

  componentWillUpdate() {
    this.getCoinData()
  }

  countDown = () => {
    setInterval(() => {

      this.postCoinDataDB();
    }, 100000)
  }

  getNews = () => {
    axios.get(`https://vschool-cors.herokuapp.com?url=https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${process.env.REACT_APP_NS}`)
      .then(res => {
        this.setState({
          news: res.data
        })
      })
  }


  getHistoricalBTC = () => {
    axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res => {

        this.setState({
          BTCHISTORICAL: res.data
        })
      })
  }

  getHistoricalETH = () => {
    axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res => {
        this.setState({
          ETHHISTORICAL: res.data
        })
      })
  }
  getHistoricalXRP = () => {
    axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res => {
        this.setState({
          XRPHISTORICAL: res.data
        })
      })
  }
  getHistoricalLTC = () => {
    axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res => {
        this.setState({
          LTCHISTORICAL: res.data
        })
      })
  }
  getHistoricalEOS = () => {
    axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/histoday?fsym=EOS&tsym=USD&limit=30&aggregate=1&e=CCCAGG&api_key=${process.env.REACT_APP_NN}`)
      .then(res => {
        this.setState({
          EOSHISTORICAL: res.data
        })
      })
  }

  getCoinData = () => {
    axios.get(`https://vschool-cors.herokuapp.com?url=https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,EOS,XRP,BTC,LTC&tsyms=BTC,USD,EUR&api_key=${process.env.REACT_APP_MM}`)
      .then(res => {

        if (this.state.currentCoin === "BTC" && res.data.DISPLAY !== undefined) {
          this.setState({
            coins: res.data,
            BTC: res.data.DISPLAY.BTC.USD,
            coinPrice: res.data.DISPLAY.BTC.USD.PRICE,
            coinVolume: res.data.DISPLAY.BTC.USD.TOTALVOLUME24H,
            coinHigh: res.data.DISPLAY.BTC.USD.HIGHDAY,
            coinLow: res.data.DISPLAY.BTC.USD.LOWDAY,
            coinMrkcap: res.data.DISPLAY.BTC.USD.MKTCAP,
            coinPrctg: res.data.DISPLAY.BTC.USD.CHANGEPCTDAY,
            coinOpen: res.data.DISPLAY.BTC.USD.OPENDAY,
            coinPriceChng: res.data.DISPLAY.BTC.USD.CHANGE24HOUR,
          })
        }
        else if (this.state.currentCoin === "ETH") {
          this.setState({
            coins: res.data,
            ETH: res.data.DISPLAY.ETH.USD,
            coinPrice: res.data.DISPLAY.ETH.USD.PRICE,
            coinVolume: res.data.DISPLAY.ETH.USD.TOTALVOLUME24H,
            coinHigh: res.data.DISPLAY.ETH.USD.HIGHDAY,
            coinLow: res.data.DISPLAY.ETH.USD.LOWDAY,
            coinMrkcap: res.data.DISPLAY.ETH.USD.MKTCAP,
            coinPrctg: res.data.DISPLAY.ETH.USD.CHANGEPCTDAY,
            coinOpen: res.data.DISPLAY.ETH.USD.OPENDAY,
            coinPriceChng: res.data.DISPLAY.ETH.USD.CHANGE24HOUR,
          })
        }
        else if (this.state.currentCoin === "LTC") {
          this.setState({
            coins: res.data,
            XRP: res.data.DISPLAY.LTC.USD,
            coinPrice: res.data.DISPLAY.LTC.USD.PRICE,
            coinVolume: res.data.DISPLAY.LTC.USD.TOTALVOLUME24H,
            coinHigh: res.data.DISPLAY.LTC.USD.HIGHDAY,
            coinLow: res.data.DISPLAY.LTC.USD.LOWDAY,
            coinMrkcap: res.data.DISPLAY.LTC.USD.MKTCAP,
            coinPrctg: res.data.DISPLAY.LTC.USD.CHANGEPCTDAY,
            coinOpen: res.data.DISPLAY.LTC.USD.OPENDAY,
            coinPriceChng: res.data.DISPLAY.LTC.USD.CHANGE24HOUR,
          })
        }
        else if (this.state.currentCoin === "XRP") {
          this.setState({
            coins: res.data,
            LTC: res.data.DISPLAY.XRP.USD,
            coinPrice: res.data.DISPLAY.XRP.USD.PRICE,
            coinVolume: res.data.DISPLAY.XRP.USD.TOTALVOLUME24H,
            coinHigh: res.data.DISPLAY.XRP.USD.HIGHDAY,
            coinLow: res.data.DISPLAY.XRP.USD.LOWDAY,
            coinMrkcap: res.data.DISPLAY.XRP.USD.MKTCAP,
            coinPrctg: res.data.DISPLAY.XRP.USD.CHANGEPCTDAY,
            coinOpen: res.data.DISPLAY.XRP.USD.OPENDAY,
            coinPriceChng: res.data.DISPLAY.XRP.USD.CHANGE24HOUR,
          })
        }
        else if (this.state.currentCoin === "EOS") {
          this.setState({
            coins: res.data,
            EOS: res.data.DISPLAY.EOS.USD,
            coinPrice: res.data.DISPLAY.EOS.USD.PRICE,
            coinVolume: res.data.DISPLAY.EOS.USD.TOTALVOLUME24H,
            coinHigh: res.data.DISPLAY.EOS.USD.HIGHDAY,
            coinLow: res.data.DISPLAY.EOS.USD.LOWDAY,
            coinMrkcap: res.data.DISPLAY.EOS.USD.MKTCAP,
            coinPrctg: res.data.DISPLAY.EOS.USD.CHANGEPCTDAY,
            coinOpen: res.data.DISPLAY.EOS.USD.OPENDAY,
            coinPriceChng: res.data.DISPLAY.EOS.USD.CHANGE24HOUR,
          })
        }
      })
  }

  postCoinDataDB = () => {
    axios.post('/crypto', this.state.coinNames)
      .then(res => {

      })
  }

  handleChange = (event) => {


    this.setState({ currentCoin: event.target.value }, () => this.switchCoin())


  }

  switchCoin = () => {


    if (this.state.currentCoin === "BTC") {
      this.setState({
        coinPrice: this.state.BTC.PRICE,
        coinVolume: this.state.BTC.TOTALVOLUME24H,
        coinHigh: this.state.BTC.HIGHDAY,
        coinLow: this.state.BTC.LOWDAY,
        coinMrkcap: this.state.BTC.MKTCAP,
        coinPrctg: this.state.BTC.CHANGEPCTDAY,
        coinOpen: this.state.BTC.OPENDAY,
        coinPriceChng: this.state.BTC.CHANGE24HOUR,
      })
    }



    else if (this.state.currentCoin === "ETH") {
      this.setState({
        coinPrice: this.state.ETH.PRICE,
        coinVolume: this.state.ETH.TOTALVOLUME24H,
        coinHigh: this.state.ETH.HIGHDAY,
        coinLow: this.state.ETH.LOWDAY,
        coinMrkcap: this.state.ETH.MKTCAP,
        coinPrctg: this.state.ETH.CHANGEPCTDAY,
        coinOpen: this.state.ETH.OPENDAY,
        coinPriceChng: this.state.ETH.CHANGE24HOUR,
      })
    }
    else if (this.state.currentCoin === "LTC") {
      this.setState({
        coinPrice: this.state.LTC.PRICE,
        coinVolume: this.state.LTC.TOTALVOLUME24H,
        coinHigh: this.state.LTC.HIGHDAY,
        coinLow: this.state.LTC.LOWDAY,
        coinMrkcap: this.state.LTC.MKTCAP,
        coinPrctg: this.state.LTC.CHANGEPCTDAY,
        coinOpen: this.state.LTC.OPENDAY,
        coinPriceChng: this.state.LTC.CHANGE24HOUR,
      })
    }
    else if (this.state.currentCoin === "EOS") {
      this.setState({
        coinPrice: this.state.EOS.PRICE,
        coinVolume: this.state.EOS.TOTALVOLUME24H,
        coinHigh: this.state.EOS.HIGHDAY,
        coinLow: this.state.EOS.LOWDAY,
        coinMrkcap: this.state.EOS.MKTCAP,
        coinPrctg: this.state.EOS.CHANGEPCTDAY,
        coinOpen: this.state.EOS.OPENDAY,
        coinPriceChng: this.state.EOS.CHANGE24HOUR,
      })
    }
    else if (this.state.currentCoin === "XRP") {
      this.setState({
        coinPrice: this.state.XRP.PRICE,
        coinVolume: this.state.XRP.TOTALVOLUME24H,
        coinHigh: this.state.XRP.HIGHDAY,
        coinLow: this.state.XRP.LOWDAY,
        coinMrkcap: this.state.XRP.MKTCAP,
        coinPrctg: this.state.XRP.CHANGEPCTDAY,
        coinOpen: this.state.XRP.OPENDAY,
        coinPriceChng: this.state.XRP.CHANGE24HOUR,
      })
    }
  }

  render() {
    return (
      <Provider value={{
        getCoinData: this.getCoinData,
        getCoinData2: this.getCoinData2,
        getHistoricalBTC: this.getHistoricalBTC,
        getHistoricalETH: this.getHistoricalETH,
        getHistoricalXRP: this.getHistoricalXRP,
        getHistoricalLTC: this.getHistoricalLTC,
        getHistoricalEOS: this.getHistoricalEOS,
        getCoinNames: this.getCoinNames,
        countDown: this.countDown,
        switchCoin: this.switchCoin,
        handleChange: this.handleChange,
        getNews: this.getNews,
        ...this.state
      }}>
        {this.props.children}
      </Provider>
    )
  }
}


export function withProvider(C) {
  return props => <Consumer>
    {value => <C {...value}{...props} />}
  </Consumer>
}

