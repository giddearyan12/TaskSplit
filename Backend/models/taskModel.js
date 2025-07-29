import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'agent' },
  firstName: String,
  phone: String,
  notes: String,
});

const taskModel = mongoose.model('Task', taskSchema);
export default taskModel;
