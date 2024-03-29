import PropTypes from "prop-types";
import Dropzone from "react-dropzone";

const FileUpload = ({ onImageChange, images }) => {
	return (
		<div className="flex gap-4">
			<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
				{({ getRootProps, getInputProps }) => (
					<section className="min-w-[300px] h-[300px] border flex items-center justify-center">
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							<p className="text-3xl">+</p>
						</div>
					</section>
				)}
			</Dropzone>
			<div className="flex-glow h-[300px] border flex items-center justify-center overflow-x-scroll overflow-y-hidden">
				{images.map((image) => (
					<div key={image}>
						<img
							src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
							className="min-w-[300px] h-[300px]"
							alt={image}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

FileUpload.propTypes = {
	onImageChange: PropTypes.func.isRequired,
	images: PropTypes.array.isRequired,
};

export default FileUpload;
