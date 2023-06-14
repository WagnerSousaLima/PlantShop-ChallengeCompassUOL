import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import style from './CarouselCards.module.css'
import CardPlant from './Card/CardPlant';

const CarouselCards = () => {
    return (
        <div className={style.divCarousel}>
            <section>
                <h2 className={style.sectionTitle}>This Weeks Most Popular <strong className={style.titleStrong}>And Best Selling</strong></h2>
                <Splide 
                    aria-label="My Favorite Images"
                    options={ {
                            type: 'loop',
                            perPage: 3,
                            perMove: 1,
                            gap: '3rem',
                            speed: 3000,
                        }
                    }>
                    <SplideSlide>
                        <CardPlant/>
                    </SplideSlide>
                </Splide>                
            </section>
            <section>
                <h2 className={style.sectionTitle}><strong className={style.titleStrong}>Plants In</strong> Sale</h2>
                <Splide 
                    aria-label="My Favorite Images"
                    options={ {
                            type: 'loop',
                            perPage: 3,
                            perMove: 1,
                            gap: '3rem',
                            speed: 3000,
                        }
                    }>
                    <SplideSlide>
                        <CardPlant/>
                    </SplideSlide>
                </Splide>       
            </section>
        </div>
    )
}

export default CarouselCards;

