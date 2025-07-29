import agentModel from "../models/agentModel.js";

const addAgent = async (req, res) => {
    try {
        const { name, email, phone } = req.body.data;
        const exists = await agentModel.findOne({ email });
        if (exists) {
            return res.status(200).json({ success: false, msg: "Already Exists" })
        }
        const newagent = new agentModel({
            name,
            email,
            phone,
        })
        await newagent.save();
        return res.status(200).json({ success: true, msg: "Done" });

    } catch (error) {
        return res.status(500).json({success:false, msg:error})
    }
}

const getAgents = async(req, res)=>{
    try {
        const agents = await agentModel.find();
        res.status(200).json({success: true, agents})
    } catch (error) {
        return res.status(500).json({success:false, msg:error})
    }
}
export { addAgent, getAgents }