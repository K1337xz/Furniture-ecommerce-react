import "./materialscard.scss";

export default function MaterialsCard({ title, description, image }) {
	return (
		<div className="materialsCard">
			<div className="materialsCard__card">
				<div className="materialsCard__cardLeft">
					<div className="materialsCard__cardLeft-content">
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				</div>
				<div className="materialsCard__cardRight">
					<img src={image} alt="first about photo" />
				</div>
			</div>
		</div>
	);
}
