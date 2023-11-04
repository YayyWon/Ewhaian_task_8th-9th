const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { User } = require('./models/User');

const config = require('./config/key');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB Connected..');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    })
    .catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.send('Hello World!~~안녕하세요~');
});

app.post('/register', async (req, res) => {
    // 회원 가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body);

    try {
        const userInfo = await user.save();
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});
