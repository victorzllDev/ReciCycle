function ImagePoster({ img }) {
	return (
		<img
			src={img}
			alt="Image Poster"
			className="h-full w-full rounded object-cover object-center"
		/>
	)
}

export default ImagePoster
