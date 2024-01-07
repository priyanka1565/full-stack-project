const express = require('express');
const connectDataBase = require('./connection/database');
const RegisterModel = require('./model/registeModel');

const app = express();
const cors = require('cors');
const router = express.Router();

app.use(express.json());
app.use(cors());

const Port = process.env.PORT || 5000;

//Registration user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await RegisterModel.findOne({ username });
        console.log(user)

        if (user) {
            res.json({ data: [], status: true, message: "User Already exist" });
        } else {
            await RegisterModel.create({ username, password });
            res.json({ data: [], status: true, message: "User created" });
        }
    } catch (error) {
        res.json(error);
    }
})

//Login user

app.listen(Port, async () => {
    try {
        await connectDataBase.connectDataBase();
        console.log('Database connected successfully!');
    } catch (error) {
        console.log('Error:', error);
    }
});
