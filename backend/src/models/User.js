const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

// Schema (데이터 구조 정의)
const userSchema = mongoose.Schema({
	name: {
		type: String,
		maxLength: 50,
	},
	email: {
		type: String,
		trim: true,
		unique: true,
	},
	password: {
		type: String,
		minLengh: 5,
	},
	role: {
		type: Number,
		default: 0,
	},
	image: String,
	cart: {
		type: Array,
		default: [],
	},
	history: {
		type: Array,
		default: [],
	},
});

userSchema.pre("save", async function (next) {
	let user = this; // 유저 데이터

	if (user.isModified("password")) {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(user.password, salt);
		user.password = hash;
	}

	next(); // 빠져나오기
});

userSchema.methods.comparePassword = async function (plainPassword) {
	let user = this;
	console.log(user);
	const match = await bcrypt.compare(plainPassword, user.password);
	return match;
};

// Model 생성 (컬렉션의 이름과 그 컬렉션의 스키마를 인자로 받아 새로운 모델 생성)
// Model은 데이터베이스와 상호 작용할 수 있는 인터페이스를 제공
// 마지막에 두어야 함
const User = mongoose.model("User", userSchema);

module.exports = User;
