import express from 'express'
import { config } from './config/index.js'
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors'
import jwt from 'jsonwebtoken'
const app=express()


// middleware

app.use(express.json())
app.use(cors())



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(config.db_url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
     
      await client.connect();
    //   connection
      app.get("/",(req,res)=>{
        res.send("Hello World 2")
    })
    




    // running port
    app.listen(config.port,()=>{
        console.log("server is running port :",config.port)
    })
      
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      
    //   await client.close();
    }
  }
  run();


