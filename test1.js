'use strict';


chatp2p( new Peer(document.querySelector(".id-in").value, {debug: 3,
    host: '0.peerjs.com',
    port: 443}))

