import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./Routes/ReservationRoutes.js";

const app = express();
dotenv.config({ path:"./config/config.env"});

//in models folders we create schema(dataabase me jo data hoga uske undar kon kon si chize store hogi like FN LN EMAIL etc)
// code connecting for backend to frontend
// if ek hi backend ko two or three front end ke sath connect krna chahte ho to use process.env.Frontend_url , then other, then other like this
// post method use because data sirf bhejna hai hmko backend me
// app.use ko baar baar use because its like a middle ware like here app.use ke andar cors hai isko backend as a middleware use krega
//express.json for changing string into json object
// urlencoded data kis type ka hoga

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/v1/reservation',reservationRouter);
// you can use another as your preference


dbConnection();
// sbse last database ka kaam isme now your backend code connected to database successfully

app.use(errorMiddleware);
export default app;
// module.exports = app;
 

// here all the variable are secrets
// packages we install npm i cors dotev express mongoose validator
// cors connect backend with frontend
// dotenv for secret variable or environment variable
// express backend framework backend ko easy banata hai
// mongoose database ka framework hai aur kaise kaam kr skte hai mongodb ke sath
// validator for email validation
// port=4000 this vaiables are secret at the time of deploy also this variable are secret

//mongodb atlas login
//mail=alok27140@gmail.com
//password-Alokumar123

//mongodb atlas cluster
//username = alok27140
//password = Sa4vwOlow8qWG2mJ

//after connect -> driver -> then link copy
//mongodb+srv://alok27140:<password>@cluster0.lraazj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0