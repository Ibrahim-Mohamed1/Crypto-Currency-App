const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 6669;


app.use(express.json());
app.listen(port, () => {
    console.log(`Port is on ${port}`);
})

app.use('/crypto' , require('./routes/cryptoRoutes'));

mongoose.connect('mongodb://localhost:27017/crypto', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));
