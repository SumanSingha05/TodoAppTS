import express from "express";
import todoRoutes from "./routes/todo";

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is listen at port ${PORT}`);
})