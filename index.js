const express = require('express')  //express 모듈 불러오기
const app = express()  //function 이용해서 새로운 express app 만들기
const port = 5000   //5000번 포트를 백 서버로 사용

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yeangsshi:Wonkim0gi720@cluster0.avat7.mongodb.net/').then(() => console.log('connected')).catch(error => console.log(err))



app.get('/', (req, res) => {
    res.send('Hello World!~~안녕하세요~')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
