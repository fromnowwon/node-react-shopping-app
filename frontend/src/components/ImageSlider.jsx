import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ images }) => {
	return (
		<Carousel autoPlay showThumbs={false} infiniteLoop>
			{images.map((image) => (
				<div key={image}>
					<img
						src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
						alt={image}
						className="w-full max-h-[150px]"
					/>
					<p className="legend">Legend 1</p>
				</div>
			))}
		</Carousel>
	);
};

ImageSlider.propTypes = {
	images: PropTypes.array,
};

export default ImageSlider;
