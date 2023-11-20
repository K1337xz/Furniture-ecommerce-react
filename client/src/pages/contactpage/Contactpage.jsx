import Nav from "../../components/navbar/Nav";
import ContactForm from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import "./contactpage.scss";

export default function Contactpage() {
	return (
		<>
			<Nav />
			<main className="container">
				<div className="contact">
					<div className="contact__topHero">
						<h1>Contact Us</h1>
					</div>
					<div className="contact__content">
						<ContactForm />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
