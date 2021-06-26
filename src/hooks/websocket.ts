import {WS_ADDRESS} from '../configs'
import { io } from "socket.io-client";


function useWebsocket(){
    const socket = io("ws://localhost:3000");
    // client-side
    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
    
    socket.on("disconnect", () => {
        console.log(socket.id); // undefined
    });

    socket.on("connect_error", () => {
        console.log('skcket error'); // undefined
      });
}


export default useWebsocket