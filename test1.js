'use strict';


let peer
let conn;
document.querySelector(".set-id").addEventListener("click", () =>{
    peer = new Peer(document.querySelector(".id-in").value, {debug: 3,
        host: '0.peerjs.com',
        port: 443})
})
document.querySelector(".call").addEventListener("click", ()=>{
    conn = peer.connect(document.querySelector(".id-out").value)
})


setInterval(()=>console.log(peer), 1000)
setInterval(()=>console.log(conn), 1000)


