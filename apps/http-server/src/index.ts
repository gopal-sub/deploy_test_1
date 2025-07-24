import express from "express";

import {client} from '@repo/db/client'


const app = express();

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hi tere whats cookin")
});


app.post('/signup',async (req, res)=>{

    const { email, password} = req.body;
    try {
        const response  = await client.user.create({
            data: {
                email,
                password
            }
            
        });

        res.json({
            msg: "user created"
        })


    } catch (error) {
        res.json({
            msg: "database error"
        })
    }
});

app.listen(3002);