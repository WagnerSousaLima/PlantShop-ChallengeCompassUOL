
import styles from "./PlantRegistration.module.css";
import imageform from "./imgs/image_Form.png"

function PlantRegistration() {
	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<form>

					<div>
						<p className={styles.titulo}>Plant registration</p>
						<hr />
					</div>

					<div className={styles.identification}>
						<label htmlFor="name">Plant name</label>
						<input type="text" placeholder=" " />

						<label htmlFor="subtitle">Plant subtitle</label>
						<input type="text" placeholder=" " />

						<label htmlFor="type">Plant type</label>
						<input type="text" placeholder=" " />
					</div>

					<div className={styles.price}>
						<label htmlFor="price">Price</label>
						<input type="number" placeholder="" />

						<label htmlFor="discount">Discount percentage</label>
						<input type="number" placeholder="" />
					</div>

					<div className={styles.radio}>
						<label>Label:</label>
						<input type="radio" id="indoor" value="Label" /> indoor
						<input type="radio" id=" outdoor" value="Label" /> Outdoor
					</div>

					<div className={styles.cxtexto}>
						<label htmlFor="Label">Features:</label>
						<textarea name="" id="" cols="30" rows="10"></textarea>
						<br />

						<label htmlFor="Label">Description:</label>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>

				</form>

				<div className={styles.register}>
					<label
						htmlFor="">
					</label>
					<input type="submit" value="Register" />
				</div>

				<div className={styles.imageform}>
					<img src={imageform} alt="imageform" />
				</div>

			</div>
		</div>
	);
}

export default PlantRegistration;