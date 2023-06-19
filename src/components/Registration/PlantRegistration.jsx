
import styles from "./PlantRegistration.module.css";

 function PlantRegistration() {
	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<form>
					<h1>Plant registration</h1>
					<hr />

					<label htmlFor="name">Plant name</label>
					<input type="text" placeholder=" " />

					<label htmlFor="subtitle">Plant subtitle</label>
					<input type="text" placeholder=" " />

					<label htmlFor="price">Price</label>
					<input type="number" placeholder="" />

					<label htmlFor="discount">Discount percentage</label>
					<input type="number" placeholder="" />

					<label>Label:</label>
					<div className={styles.radio}>
						<input type="radio" value="Label" name="label" /> indoor
						<input type="radio" value="Label" name="label" /> Outdoor
					</div>

					<label htmlFor="Label">Features:</label>
					<textarea name="" id="" cols="30" rows="10"></textarea>
					<br />

					<label htmlFor="Label">Description:</label>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</form>
			</div>

			<div className={styles.imageform}>
				<img
					src="/src/components/Registration/imgs/image_Form.svg" alt="Plant" />
			</div>

			<div>
				<label htmlFor={styles.register}>Register</label>
				<input type="text" placeholder="" />
			</div>

		</div>


	);
}

export default PlantRegistration;