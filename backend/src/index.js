const express = require("express");
const path = require("path"); // 절대 경로 사용 모듈

const app = express();
const port = 4000;

app.get("/", (req, res) => {
	res.send("hello!!");
});

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
	console.log(`${port}번에서 실행됨`);
});
