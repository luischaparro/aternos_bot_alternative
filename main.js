const bedrock = require('bedrock-protocol')
const http = require('http');

http.createServer((req, res)=>{
  res.write('Funcionando');
  res.end;
}).listen(process.env.PORT || 5000)

const client = bedrock.createClient({
  host: 'ab01.aternos.me',  
  port: 60526,        
  username: 'Sam',
  offline: true
});

client.on('join', client => console.log('Player has joined!'))

client.on('join', client => console.log('Player has spawned!'))

client.on('text', (packet) => {
  console.log( packet.source_name, ": " , packet.message)
})
