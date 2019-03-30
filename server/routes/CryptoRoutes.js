const express = require('express');
const cryptoRoute = express.Router();
const Crypto = require('../models/CryptoSchema.js');

cryptoRoute.route('/')
    .get((req, res) => {
        console.log('get request hit');
        Crypto.find((err, currencies) => {
            if(err) {
                res.status(500)
                return res.send(err);
            } else {
                res.status(200)
                return res.send(currencies);
            }
        })
    })
    .post((req, res) => {
       const coinInfo = new Crypto(req.body)
       console.log(req.body)
       coinInfo.save((err) => {
           if(err) return res.status(500).send(err)
        return res.status(200).send(coinInfo)
        })
    })


    module.exports = cryptoRoute;