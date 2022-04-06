'use strict';

let msgBox = document.querySelector(".msg-box");

var peer = new Peer(prompt("Introduce un ID"), {debug: 1,
    host: '0.peerjs.com',
    port: 443})
var conn;

document.querySelector(".send").addEventListener("click", ()=>{
    console.log("enviando mensaje")
    console.log(conn)
    conn.send(document.querySelector(".msg").value)
    let msgblob = document.createElement("p")
    msgblob.textContent = document.querySelector(".msg").value
    msgBox.appendChild(msgblob)
})

document.querySelector(".call").addEventListener("click", ()=>{
    console.log("llamando")
    conn = peer.connect(document.querySelector(".id-out").value)
    conn.on("data", (data)=>{
        let msgblob = document.createElement("p")
        msgblob.textContent = data
        msgBox.appendChild(msgblob)
    })
})

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
});

peer.on("connection", (conection)=>{
    console.log("connected")
    conn = conection
    conn.on("data", (data)=>{
        let msgblob = document.createElement("p")
        msgblob.textContent = data
        msgBox.appendChild(msgblob)
    })
})









