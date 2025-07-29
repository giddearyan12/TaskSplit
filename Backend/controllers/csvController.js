import agentModel from "../models/agentModel.js"
import taskModel from "../models/taskModel.js";
import path from 'path'
import fs from 'fs'
import csvParser from "csv-parser";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvDistributer = async (req, res) => {
    try {
        const agents = await agentModel.find();
        if (agents.length < 1) return res.status(400).json({ msg: "No agents Found" });
        const results = [];
        const filepath = path.join(__dirname, '..', req.file.path);

        fs.createReadStream(filepath)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                const taskperagent = Math.floor(results.length / agents.length);
                const remainder = results.length % agents.length;
                let taskIndex = 0;
                for (let i = 0; i < agents.length; i++) {
                    const count = taskperagent + (i < remainder ? 1 : 0);
                    const agentTasks = results.slice(taskIndex, taskIndex + count)
                    taskIndex += count;
                    for (const task of agentTasks) {
                        await taskModel.create({
                            agentId: agents[i]._id,
                            firstName: task['First Name'] || task.firstName,
                            phone: task.Phone,
                            notes: task.Notes
                        });
                    }
                }
                fs.unlinkSync(filepath);
                res.status(200).json({ msg: 'Tasks distributed successfully' });

            })
    } catch (error) {
       res.status(500).json({success:false, error})
    }


}

const getTasks =async(req, res)=>{
    try {
        const tasks = await taskModel.find().populate({path:"agentId", select:"name"})
        
        return res.status(200).json({success:true, tasks})
    } catch (error) {
        return res.status(500).json({success:false, error})
    }
}
export { csvDistributer, getTasks }