import bodyParser from "body-parser";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import "reflect-metadata";
import userRoutes from "./router/user-routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.all("*", (req: Request, res: Response) => {
	return res.status(404).send({
		success: false,
		message: "Invalid route",
	});
});

export default app;