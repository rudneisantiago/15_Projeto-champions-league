import express, { json } from "express";
import { routes } from "./routes";
import cors, { CorsOptions } from "cors";

const app = express();

app.use(json());
app.use("/api", routes);

const corsOptions: CorsOptions = {
  origin: "http://www.rudnei.com",
  methods: ["GET"],
};

app.use(cors(corsOptions));

export { app };
