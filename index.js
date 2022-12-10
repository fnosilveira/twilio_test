const accountSid = 'ACb7c80c8d17fdeb14843e4b0788adfd37'; 
const authToken = '7369bee266aea4fe701fc0f7da521047'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+553491788082' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();