import express from 'express';
import { addAgent, getAgents } from '../controllers/agentController.js';
const agentRouter = express.Router();

agentRouter.post('/add',addAgent);
agentRouter.get('/list',getAgents);



export default agentRouter