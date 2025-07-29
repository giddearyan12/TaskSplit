import mongoose, { Mongoose, Schema } from "mongoose";

const agentSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, unique:true, required: true },
    phone:{type: String, required: true }
})

const agentModel = mongoose.model('agent', agentSchema);
export default agentModel;