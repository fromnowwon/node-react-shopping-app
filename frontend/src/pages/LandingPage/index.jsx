import React from "react";
import CheckBox from "./sections/CheckBox";
import RadioBox from "./sections/RadioBox";
import SearchInput from "./Sections/SearchInput";
import CardItem from "./Sections/CardItem";

const LandingPage = () => {
	return (
		<section>
			<div className="text-center m-7">
				<h2 className="text-2xl">여행 상품 사이트</h2>
			</div>
			{/* filter */}
			<div className="flex gap-3">
				<div className="w-1/2">
					<CheckBox />
				</div>
				<div className="w-1/2">
					<RadioBox />
				</div>
			</div>
			{/* search */}
			<div className="flex justify-end">
				<SearchInput />
			</div>
			{/* card */}
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
				<CardItem />
			</div>
			{/* load more */}
			<div className="flex justify-center mt-5">
				<button className="px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500">
					더보기
				</button>
			</div>
		</section>
	);
};

export default LandingPage;
