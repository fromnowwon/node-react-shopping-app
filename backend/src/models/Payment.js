const { default: mongoose } = require("mongoose");

// Schema (데이터 구조 정의)
const paymentSchema = mongoose.Schema(
	{
		user: {
			type: Object,
		},
		data: {
			type: Array,
			default: [],
		},
		product: {
			type: Array,
			default: [],
		},
	},
	{ timestamp: true }
);

// Model 생성 (컬렉션의 이름과 그 컬렉션의 스키마를 인자로 받아 새로운 모델 생성)
// Model은 데이터베이스와 상호 작용할 수 있는 인터페이스를 제공
// 마지막에 두어야 함
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
