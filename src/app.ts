// import package
import express, { Request, Response } from "express";
import cors from 'cors'
import router from "./app/router";


// import bodyParser from "body-parser";
// import globalErrorHandler from './app/middleware/globalErrorHandler'

const app = express();
//middleware
app.use(cors());
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));

//router
app.use("/api",router)

// check server conncetion
app.get("/", (req: Request, res: Response) => {
  res.send("The server is connect successfully");
});
// not found middleware


export default app;