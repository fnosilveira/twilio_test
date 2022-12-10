// requires
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Inicia WebApp
const webApp = express();

// Config WebApp
webApp.use(bodyParser.urlencoded({
    extended: true
}));
webApp.use(bodyParser.json());

// Server Port
const PORT = process.env.PORT;

// Route Home
webApp.get('/', (req, res) => {
    res.send(`Olá Mundo`);
});

const WA = require('./function/send_message');

// Route for WhatsApp
webApp.post('/whatsapp', async (req, res) => {

    let message = req.body.Body;
    let senderID = req.body.From;

    console.log(message);
    console.log(senderID);

    // Resposta automatica
    await WA.sendMessage('Tudo bem com você?', senderID);

});

// Inicia server
webApp.listen(PORT, () => {
    // console.log(`Server is up and running at ${PORT}`);
}); 