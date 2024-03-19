const express = require("express");
const path = require("path"); // 절대 경로 사용 모듈
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 4000;

// 환경변수 사용
dotenv.config();

// mongoose 연결
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("연결 완료");
	})
	.catch((err) => console.error(err));

// cors 사용
app.use(cors());

// 요청의 본문(body)을 파싱하여 JSON 형식의 데이터로 변환
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello!!");
});

app.post("/", (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
	console.log(`${port}번에서 실행됨`);
});
