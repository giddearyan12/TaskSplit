import express from 'express';
const csvRouter = express.Router();
import multer from 'multer';
import { csvDistributer, getTasks } from '../controllers/csvController.js';
const upload = multer({ dest: 'uploads/' });


csvRouter.post('/upload', upload.single('file'),csvDistributer);
csvRouter.get('/gettasks',getTasks);

export default csvRouter;
