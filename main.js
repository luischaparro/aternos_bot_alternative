const bedrock = require('bedrock-protocol');
const http = require("http");
const ping = require('node-http-ping');

/*Crear servidor web que establezca un puerto*/

const server = http.createServer((req, res) => {
  console.log("On");
  res.end();
}).listen(process.env.PORT);

/*Hacer ping para simular trafico*/

function trafico(){
  ping('https://aternos-bot-alternative.herokuapp.com')
  .then(time => console.log(`Response time: ${time}ms`))
  .catch(() => console.log('Failed to ping'))
};

setInterval(trafico, 3000);

/*Crear jugador y hacer que entre*/
const client = bedrock.createClient({
  host: 'ab01.aternos.me',  
  port: 60526,        
  username: 'Bob',
  offline: true
});

client.on('join', client => console.log('Player has joined!'))

client.on('join', client => console.log('Player has spawned!'))

client.on('text', (packet) => {
  console.log( packet.source_name, ": " , packet.message)
});