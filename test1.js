'use strict';

let msgBox = document.querySelector(".msg-box");
let status = document.querySelector(".status");

let SendMessage = (msgcont) =>{
    let msgblob = document.createElement("p")
    msgblob.textContent = msgcont
    msgBox.appendChild(msgblob)
}
    
status.textContent = "DISCONNECTED"
var peer = new Peer(prompt("Introduce un ID"), {debug: 1,
    host: '0.peerjs.com',
    port: 443})
var conn;

document.querySelector(".send").addEventListener("click", ()=>{
    console.log("enviando mensaje")
    conn.send(document.querySelector(".msg").value)
    let msgblob = document.createElement("p")
    msgblob.textContent = document.querySelector(".msg").value
    msgBox.appendChild(msgblob)
})

document.querySelector(".call").addEventListener("click", ()=>{
    console.log("llamando")
    status.textContent = "CONNECTING ..."
    conn = peer.connect(document.querySelector(".id-out").value)
    conn.on("open", ()=>status.textContent = "CONNECTED")
    conn.on("data", (data)=>SendMessage(data))
})

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
});

peer.on("connection", (conection)=>{
    console.log("connected")
    status.textContent = "CONNECTED"
    conn = conection
    conn.on("data", (data)=>SendMessage(data))
})









