import { WebSocketServer} from 'ws';
import {client} from '@repo/db/client'

const wss = new WebSocketServer({port: 3001});


wss.on('connection',async (socketObj)=>{
    const response = await client.user.create({
        data: {
            email: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    console.log(response);
    socketObj.send("you are connected to the wss")
})