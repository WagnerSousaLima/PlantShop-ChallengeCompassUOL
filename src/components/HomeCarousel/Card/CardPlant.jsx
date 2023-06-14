import style from './CardPlant.module.css';
import cacto from './cacto.png'

const CardPlant = () => {
    return(
        <div className={style.divCard}>
            <img className={style.imageCard} src={cacto} alt="Foto de um Cacto"/>
            <div className={style.plantInfos}>
                <p className={style.plantTitle}>Echinocereus Cactus</p>
                <span className={style.plantPrice}>$15.00</span>
                <button className={style.plantTag}>Indoor</button>
            </div>
        </div>
    )
}

export default CardPlant;