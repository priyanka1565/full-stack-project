const express = require('express');
const connectDataBase = require('./connection/database');
const RegisterModel = require('./model/register');
const LoginModel = require('./model/login');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const Port = process.env.PORT || 5000;

//Registration user
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    RegisterModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                res.json('Already registered');
            } else {
                RegisterModel.create({ name, email, password })
                    .then((result) => res.json('Account created'))
                    .catch((err) => res.json(err));
            }
        })
        .catch((err) => res.json(err));
});

app.listen(Port, async () => {
    try {
        await connectDataBase.connectDataBase();
        console.log('Database connected successfully!');
    } catch (error) {
        console.log('Error:', error);
    }
});
