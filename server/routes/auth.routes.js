import express from "express";
import { login, logout, register } from "../controller/user.controller.js";

const Authroutes = express.Router();

Authroutes.post('/register', register);
Authroutes.post('/login', login);
Authroutes.post('/logout', logout);

export default Authroutes;
