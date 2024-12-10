// import package
import express, { Request, Response } from "express";
import cors from 'cors'
import router from "./app/router";
import globalErrorHandler from "./app/middleware/globalErrorHandler";


const app = express();
//middleware
app.use(cors());
app.use(express.json()); 

//router
app.use("/api",router)



//global error middleware
app.use(globalErrorHandler);

// check server conncetion
app.get("/", (req: Request, res: Response) => {
  res.send("The server is connect successfully");
});




export default app;