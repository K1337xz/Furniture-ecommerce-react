import "./masonryGallery.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { masonryGallery } from "../../imgdata";
import { useRef, useState } from "react";

export default function MasonryGallery() {
	const myRef = useRef(null);
	const [showMoreImages, setShowMoreImages] = useState(false);

	const toggleShow = (e) => {
		e.preventDefault();
		setShowMoreImages((prev) => !prev);
		myRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className="masonry" ref={myRef}>
			{!showMoreImages ? (
				<div>
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
					>
						<Masonry gutter="10px">
							{masonryGallery
								.slice(masonryGallery.length - 5)
								.map((images) => (
									<img
										key={images.id}
										src={images.src}
										style={{
											width: "100%",
											display: "block",
										}}
										alt=""
									/>
								))}
						</Masonry>
					</ResponsiveMasonry>
					<div className="masonry__fade"></div>
				</div>
			) : (
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
				>
					<Masonry gutter="10px">
						{masonryGallery.map((images) => (
							<img
								key={images.id}
								src={images.src}
								style={{ width: "100%", display: "block" }}
								alt=""
								lazy
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			)}
			<div className="masonry__button">
				<button onClick={toggleShow}>SHOW MORE</button>
			</div>
		</div>
	);
}
