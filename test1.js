'use strict';


let peer;
document.querySelector(".set-id").addEventListener('click', ()=>{
    let myid = document.querySelector(".id-in").value
    peer = new Peer(myid, {debug: 3,
        port: 443,})

})


let conn = document.querySelector(".call").addEventListener('click', ()=>{
    conn = peer.connect(document.querySelector(".id-out").value);
    document.querySelector(".send").addEventListener('click', ()=>{
        console.log("a")
        let msg = document.querySelector(".chat").value
        conn.send(msg);
    })

})





