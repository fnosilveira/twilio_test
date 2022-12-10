require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN; 

const client = require('twilio')(accountSid, authToken);
 

// //Envio simples de msg//
// client.messages 
//       .create({ 
//          body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
//          from: 'whatsapp:+14155238886',       
//          to: 'whatsapp:+553491788082' 
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();  

const sendMessage = async (message, senderID) => {

    try {
        await client.messages.create({
            to: senderID,
            body: message,
            from: `whatsapp:+14155238886`
        });
    } catch (error) {
        console.log(`Error at sendMessage --> ${error}`);
    }
};

module.exports = {
    sendMessage
}