require("dotenv").config()
const express = require("express")
const cheerio = require('cheerio');
const axios = require('axios');
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const router = require("./router/index")
const errorMidleware = require("./middlewares/error-middleware")
const urlRozetka = 'https://rozetka.com.ua/notebooks/c80004/producer=asus;series=tuf-gaming/';

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMidleware);


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on Port = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()


axios.get(urlRozetka)
    .then(response => {
        const $ = cheerio.load(response.data);

        const products = [];

        $('.goods-tile__inner').slice(0, 10).each(function () {
            const title = $(this).find('.goods-tile__title').text().trim();
            const price = $(this).find('.goods-tile__price-value').text().trim();

            products.push({ title, price });
        });
        app.get("/getData", (req, res) => {
            res.send(products)
        })
        console.log(products);
    })
    .catch(error => {
        console.log(error);
    });



axios.get('https://www.foxtrot.com.ua/ru/shop/noutbuki_asus-tuf.html')
    .then(response => {
        const $ = cheerio.load(response.data);

        const products = [];

        $('.card ').slice(0, 9).each(function () {
            const title = $(this).find('.card__title').text().trim();
            const price = $(this).find('.card-price').text().trim();

            products.push({ title, price });
        });
        app.get("/getDataFoxtrot", (req, res) => {
            res.send(products)
        })
        console.log(products);
    })
    .catch(error => {
        console.log(error);
    });

app.use(cors())
