const express = require('express') //express 모듈을 가져온다
const app = express()  // 새로운 express를 만듦
const port = 5000 //포트

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://PSB:gkdixp1@34@study-fictf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World! 노드 공부하기 시작'))
//루트 디렉토리에 오면 헬로 월드를 출력

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


//port 5000에서 실행