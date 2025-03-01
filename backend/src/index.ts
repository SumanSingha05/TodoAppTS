import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo";

const app = express();
const PORT = 8080;

app.use(bodyParser. json());
app.use("/todos", todoRoutes);

//middleware to handle any other request
app.use((err: Error, req: Request, res: Response, next : NextFunction) => {
    res.status(500).json({message:err.message});

})

app.listen(PORT, () => {
    console.log(`Server is listen at port ${PORT}`);
})