import { Router } from "express";
import { userRoutes } from "./user/userRoutes";

const routes = Router();


routes.use(userRoutes);

export {routes}