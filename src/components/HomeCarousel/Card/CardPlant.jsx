import style from './CardPlant.module.css';
import cacto from './imgs/cacto.png'

const CardPlant = (props) => {
    const discount = props.price - ((props.discount / 100) * props.price);
    
    return(
        <div className={style.divCard}>
            <img className={style.imageCard} src={cacto} alt="Foto de um Cacto"/>
            <div className={style.plantInfos}>
                <p className={style.plantTitle}>{props.name}</p>
                <div>
                    {props.discount > 0 ? 
                        <div>
                            <span className={style.plantPrice}>${discount.toFixed(2)}</span>
                            <span className={style.plantDiscount}>${props.price}</span>
                        </div>
                    : <span className={style.plantPrice}>${props.price}</span>}
                </div>
                <label className={style.plantTag}>{props.label[0]}</label>
            </div>
        </div>
    )
}

export default CardPlant;