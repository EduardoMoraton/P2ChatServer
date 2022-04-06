'use strict';


let peer = new Peer({debug: 1,
    host: '0.peerjs.com',
    port: 443})
let conn;

document.querySelector(".send").addEventListener("click", ()=>{
    console.log("enviando mensaje")
    conn.send("hola")
})

document.querySelector(".call").addEventListener("click", ()=>{
    console.log("llamando")
    conn = peer.connect(document.querySelector(".id-out").value)
})

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
});

peer.on("connection", (conn)=>{
    console.log("connected")
    conn.on("data", (data)=>console.log(data))
})









