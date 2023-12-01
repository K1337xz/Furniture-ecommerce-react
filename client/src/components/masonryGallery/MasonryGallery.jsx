import "./masonryGallery.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FullscreenGallery from "../fullscreenGallery/FullscreenGallery";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { masonryGallery } from "../../imgdata";
import { useEffect, useState } from "react";

export default function MasonryGallery() {
	const [clickedPhoto, setClckedPhoto] = useState();
	const [openGallery, setOpenGallery] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);

	useEffect(() => {
		let findEl = masonryGallery.find((obj) => obj.src === clickedPhoto);
		if (findEl) {
			setImageIndex(findEl.id);
		}
	}, [clickedPhoto]);

	const toggleOpen = (e) => {
		setOpenGallery((prev) => !prev);
		setClckedPhoto(e.target.src);
	};

	const toggleNext = () => {
		if (imageIndex === 11) {
			setImageIndex(0);
		} else {
			setImageIndex(imageIndex + 1);
		}
	};

	const toggleBack = () => {
		if (imageIndex === 0) {
			setImageIndex(11);
		} else {
			setImageIndex(imageIndex - 1);
		}
	};
	return (
		<>
			<div className="masonry">
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
				>
					<Masonry gutter="10px">
						{masonryGallery.map((images) => (
							<img
								key={images.id}
								src={images.src}
								style={{ width: "100%", display: "block" }}
								className="masonry__photo"
								alt="photo in masonry"
								onClick={toggleOpen}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
			{openGallery && (
				<FullscreenGallery
					src={masonryGallery[imageIndex].src}
					open={toggleOpen}
					nextImage={toggleNext}
					prevImage={toggleBack}
					pagex={imageIndex}
				/>
			)}
		</>
	);
}
