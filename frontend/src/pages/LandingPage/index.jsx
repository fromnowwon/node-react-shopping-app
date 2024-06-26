import React, { useEffect, useState } from "react";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import SearchInput from "./Sections/SearchInput";
import CardItem from "./Sections/CardItem";
import axiosInstance from "../../utils/axios";

const LandingPage = () => {
	const limit = 4;
	const [products, setProducts] = useState([]);
	const [skip, setSkip] = useState(false);
	const [hasMore, setHasMore] = useState(false);
	const [filters, setFilters] = useState({
		continents: [],
		price: [],
	});

	const fetchProducts = async ({
		skip,
		limit,
		loadMore = false,
		filters = {},
		searchTerm = "",
	}) => {
		const params = {
			skip,
			limit,
			filters,
			searchTerm,
		};

		try {
			const response = await axiosInstance.get("/products", { params });
			setProducts(response.data.products);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchProducts({ skip, limit });
	}, []);

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
				{products.map((product) => (
					<CardItem product={product} key={product.it} />
				))}
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
