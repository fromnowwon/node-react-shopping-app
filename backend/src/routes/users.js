const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

// 권한 체크
router.get("/auth", auth, async (req, res, next) => {
	return res.json({
		id: req.user._id,
		email: req.user.email,
		name: req.user.name,
		role: req.user.role,
		image: req.user.image,
		cart: req.user.cart,
		history: req.user.history,
	});
});

// 회원가입
router.post("/register", async (req, res, next) => {
	// 유저 데이터 저장
	try {
		const user = new User(req.body);
		await user.save();
		return res.sendStatus(200);
	} catch (error) {
		next(error);
	}
});

// 로그인
router.post("/login", async (req, res, next) => {
	try {
		// 존재하는 유저인지 체크
		const user = await User.findOne({ email: req.body.email });

		if (!user) {
			return res.status(400).send("Auth failed, email not found");
		}

		// 올바른 비밀번호인지 체크
		const isMatch = await user.comparePassword(req.body.password);

		if (!isMatch) {
			return res.status(400).send("Wrong password!");
		}

		const payload = {
			userId: user._id.toHexString(),
		};

		// token을 생성
		const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		return res.json({ user, accessToken });
	} catch (error) {
		next(error);
	}
});

// 로그아웃
router.post("/logout", auth, async (req, res, next) => {
	try {
		return res.sendStatus(200);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
