import express from "express";
import { valResult, valRulesForSignIn } from "../middlewares/validation.js"; // login handling
import { signInForUser } from "../controllers/signin.js"; // Controller
import session from "express-session"; // session data
import MongoStore from "connect-mongo";
import dotenv from "dotenv";

// ==============================================================
export const signInRouter = express.Router();
dotenv.config();

// Route
signInRouter.post("/", valRulesForSignIn, valResult, signInForUser);
