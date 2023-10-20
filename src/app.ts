import "reflect-metadata";
import "express-async-errors";
import express from "express";
import middlewares from "./middlewares";
import { userRouter } from "./routers/user.router";
import { categoryRouter } from "./routers/category.router";
import { sessionRouter } from "./routers/session.router";
import { scheduleRouter } from "./routers/schedule.router";
import { realEstateRouter } from "./routers/realEstate.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/schedules", scheduleRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);

app.use(middlewares.handleError);

export default app;
