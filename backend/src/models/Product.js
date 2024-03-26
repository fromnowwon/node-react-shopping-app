const { default: mongoose, Schema } = require("mongoose");

// Schema (데이터 구조 정의)
const productSchema = mongoose.Schema({
	writer: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	title: {
		type: String,
		maxLength: 30,
	},
	description: String,
	price: {
		type: Number,
		default: 0,
	},
	images: {
		type: Array,
		default: [],
	},
	sold: {
		type: Number,
		default: 0,
	},
	continents: {
		type: Number,
		defualt: 1,
	},
	views: {
		type: Number,
		defualt: 0,
	},
});

// Model 생성 (컬렉션의 이름과 그 컬렉션의 스키마를 인자로 받아 새로운 모델 생성)
// Model은 데이터베이스와 상호 작용할 수 있는 인터페이스를 제공
// 마지막에 두어야 함
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
