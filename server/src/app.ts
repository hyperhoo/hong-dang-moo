import express from 'express';
const app = express();

app.use(express.static('build'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(3000, () => {
  console.log('server is running!');
});

// client build -> build 폴더 -> server/build -> 서버를 실행

// client 폴더로 이동
// npm ci
// npm run build
// client /build -> server/build 폴더로 이동

// server 폴더로 이동
// npm ci
// tsc
// node app.js
