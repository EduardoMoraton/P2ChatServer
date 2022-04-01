'use strict';


let peer;
document.querySelector(".set-id").addEventListener('click', ()=>{
    let myid = document.querySelector(".id-in").value
    peer = new Peer(myid, {debug: 3,
        host: '9000-peers-peerjsserver-m7p3neex58r.ws-eu38.gitpod.io',
        port: 9000,
        path: '/'})

})


let conn = document.querySelector(".call").addEventListener('click', ()=>{
    conn = peer.connect(document.querySelector(".id-out").value);
    document.querySelector(".send").addEventListener('click', ()=>{
        console.log("a")
        let msg = document.querySelector(".chat").value
        conn.send(msg);
    })

})





