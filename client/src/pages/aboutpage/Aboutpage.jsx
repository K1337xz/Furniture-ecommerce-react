import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import MasonryGallery from "../../components/masonryGallery/MasonryGallery";
import "./aboutpage.scss";

export default function Aboutpage() {
	return (
		<>
			<Nav />
			<main className="container">
				<div className="about">
					<div className="about__topHero">
						<h1>About Us</h1>
					</div>
					<div className="about__content">
						<div className="about__contentTop" id="projects">
							<h2>Furniture</h2>
						</div>
						<div className="about__contentBottom">
							<p>
								At Furniture Company, we craft timeless and
								elegant pieces of furniture that transform your
								space into a masterpiece of comfort and style.
								With a commitment to quality, innovation, and
								exceptional craftsmanship, we've been a trusted
								name in the furniture industry for over three
								decades.
							</p>
						</div>
					</div>
					<div className="about__gallery">
						<div className="about__galleryTop">
							<h2>OUR FURNITURE AT YOU</h2>
						</div>
						<MasonryGallery />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
