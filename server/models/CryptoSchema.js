const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema (
    { USD: 
        { CHANGE24HOUR: String,
         CHANGEDAY: String,
         CHANGEPCT24HOUR: String,
         CHANGEPCTDAY: String, 
         FLAGS: String,
         FROMSYMBOL: String,
         HIGH24HOUR: String,
         HIGHDAY:String, 
         HIGHHOUR:String,
         IMAGEURL: String,
         LASTMARKET:String,
         LASTTRADEID: String,
         LASTUPDATE:String,
         LASTVOLUME:String,
         LASTVOLUMETO:String,
         LOW24HOUR:String,
         LOWDAY:String,
         LOWHOUR:String,
         MARKET:String,
         MKTCAP: String,
         OPEN24HOUR:String,
         OPENDAY:String,
         OPENHOUR:String,
         PRICE:String,
         SUPPLY: String,
         TOSYMBOL:String,
         TOTALVOLUME24H:String,
         TOTALVOLUME24HTO:String,
         TYPE:String,
         VOLUME24HOUR:String,
         VOLUME24HOURTO:String,
         VOLUMEDAY:String,
         VOLUMEDAYTO:String,
         VOLUMEHOUR:String,
         VOLUMEHOURTO:String
         }
    
    })

module.exports = mongoose.model('Crypto', cryptoSchema)