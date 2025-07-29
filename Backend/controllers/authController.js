import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
const register = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        const exists = await userModel.findOne({ email: email });
        if (exists) {
            return res.status(400).json({ success: true, msg: "User Already Existed" });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hash,
        })
        newUser.save();
        return res.status(200).json({ success: true, msg: "True" })

    } catch (error) {
        return res.status(500).json({ success: false, msg: error })
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ success: true, msg: "Wrong Credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: true, msg: "Wrong Credentials" });
        }
        var token = jwt.sign({ id: user.id, name: user.name }, 'random#secret');
        res.cookie(token);

        return res.status(200).json({ success: true, token })

    } catch (error) {
        return res.status(500).json({ success: false, msg: error })
    }
}
const logout = async (req, res) => {
    try {
        res.cookie.clear();

        return res.status(200).json({ success: true, token })

    } catch (error) {
        return res.status(500).json({ success: false, msg: error })
    }
}



export { register, login, logout }