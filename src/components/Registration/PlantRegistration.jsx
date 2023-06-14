import "../Registration/PlantResgistration.module.css";

function PlantRegistration() {
	return (
		<div>
			<form>
				<h1>Plant registration</h1>
                <hr/>

                <label htmlFor="name">Plant name</label>
				<input type="text" placeholder="Plant name" />

                <label htmlFor="subtitle">Plant subtitle</label>
				<input type="text" placeholder="Plant subtitle" />
                
                <label htmlFor="price">Price</label>
				<input type="number" placeholder="Price" />

                <label htmlFor="discount">Discount percentage</label>
				<input type="number" placeholder="Discount percentage" />

				<div>
                <label className="Label">Label:</label>
				<input type="radio" value="Label" name="label" /> indoor
				<input type="radio" value="Label" name="label" /> Outdoor
                </div>

                <label htmlFor="Label">Features:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea><br />

                <label htmlFor="Label">Description:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
			</form>
		</div>
	);
}

export default PlantRegistration;
