import "./masonryGallery.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { masonryGallery } from "../../imgdata";

export default function MasonryGallery() {
	return (
		<div className="grid">
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
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
}
