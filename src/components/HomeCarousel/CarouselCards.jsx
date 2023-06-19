import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { api } from '../../Services/api';
import '@splidejs/react-splide/css/sea-green';
import style from './CarouselCards.module.css'
import CardPlant from './Card/CardPlant';

const CarouselCards = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        api.get('./plants').then((response) => {
            setPlants(response.data)
        })
    }, []);

    const discountPlants = plants.filter((plant) => plant.discountPercentage > 0);
    const noDiscountPlants = plants.filter((plant) => plant.discountPercentage <= 0);

    return (
        <div className={style.divCarousel}>
            <section className={style.sectionCarousel}>
                <h2 className={style.sectionTitle}>This Weeks Most Popular <strong className={style.titleStrong}>And Best Selling</strong></h2>
                <Splide 
                    options={ {
                            type: 'loop',
                            perPage: 4,
                            perMove: 1,
                            gap: '2rem',
                            speed: 3000,
                        }
                    }>
                    {noDiscountPlants.map((plant) => (
                        <SplideSlide key={plant.id}>
                            <CardPlant
                                name={plant.name}
                                price={plant.price}
                                label={plant.label}
                            />
                        </SplideSlide>
                    ))}
                </Splide>                
            </section>
            <section className={style.sectionCarousel}>
                <h2 className={style.sectionTitle}><strong className={style.titleStrong}>Plants In</strong> Sale</h2>
                <Splide 
                    options={ {
                            type: 'loop',
                            perPage: 4,
                            perMove: 1,
                            gap: '2rem',
                            speed: 3000,
                        }
                    }>
                    {discountPlants.map((plant) => (
                        <SplideSlide key={plant.id}>
                            <CardPlant
                                name={plant.name}
                                price={plant.price}
                                discount={plant.discountPercentage}
                                label={plant.label}
                            />
                        </SplideSlide>
                    ))}
                </Splide>       
            </section>
        </div>
    )
}

export default CarouselCards;

