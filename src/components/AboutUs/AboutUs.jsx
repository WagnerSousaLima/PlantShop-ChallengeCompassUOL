import styles from './AboutUs.module.css';
import Logo from './images/linkedin.svg';
import Plant from './images/left plant.svg';
// import Developers from './Developers';

const AboutUs = () => {
    // const CarouselCards = () => {
    //     const [developers, setDevelopers] = useState([]);  
    
    
    // useEffect(() => {    
    //         api.get('./developers').then((response) => {    
    //             setPlants(response.data)    
    //         })    
    // }, []);

    return (
        <div className={styles.main}>
            <section className={styles.Container}>
                <div className={styles.content}>
                    <div className="AboutUs">
                        <h2>About Us</h2>
                        <hr/>
                        <p className={styles.aboutText}>texto texto texto texto texto texto texto texto texto texto texto 
                            texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
                            texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
                            texto texto texto </p>
                    </div>
                    <img className={styles.Plant} src={Plant} alt="plant"/>
                </div>
            </section>
            <section className={styles.DevelopersBody}>
                <h2>Developers</h2>
                <div className={styles.Body}> 
                    <div className={styles.Developers}>
                        <div className={styles.block} />
                        <div className={styles.blockGreen} />
                        <div className={styles.rest}>
                            <h3>Amanda</h3>
                            {/* <p id={styles.All} key={developers.id}>{developers.description}</p>                             */}
                            <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                        </div>
                        <img src="https://github.com/amandanscmt.png" className={styles.Photo}/>
                    </div>
                    <div className={styles.Developers}>
                        <div className={styles.block} />
                        <div className={styles.blockGreen} />
                        <div className={styles.rest}>
                            <h3>Cintia</h3>
                            <p id={styles.All}>texto</p>
                            <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                        </div>
                        <img src='https://github.com/Tita-Simoni.png' className={styles.Photo}/>
                    </div>
                    <div className={styles.Developers}>
                        <div className={styles.block} />
                        <div className={styles.blockGreen} />
                        <div className={styles.rest}>
                            <h3>Eduardo</h3>
                            <p id={styles.All}>texto</p>
                            <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                        </div>
                        <img src="https://github.com/eduardoluisreis.png" className={styles.Photo}/>
                    </div>
                    <div className={styles.Developers}>
                        <div className={styles.block} />
                        <div className={styles.blockGreen} />
                        <div className={styles.rest}>
                            <h3>Giovanna</h3>
                            <p id={styles.All}>texto</p>
                            <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                        </div>
                        <img src="https://github.com/GiovannaCstr.png" className={styles.Photo}/>
                    </div>
                    <div className={styles.Developers}>
                        <div className={styles.block} />
                        <div className={styles.blockGreen} />
                        <div className={styles.rest}>
                            <h3>João</h3>
                            <p id={styles.All}>texto</p>
                            <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                        </div>
                        <img src="https://github.com/nicaciobasilio.png" className={styles.Photo}/>
                    </div>
                    <div className={styles.Developers}>
                        <div className={styles.block} />
                        <div className={styles.blockGreen} />
                        <div className={styles.rest}>
                            <h3>Wagner</h3>
                            <p id={styles.All}>texto</p>
                            <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                        </div>
                        <img src="https://github.com/WagnerSousaLima.png" className={styles.Photo}/>
                    </div>                
                </div>
            </section>
        </div>
    )
}

export default AboutUs;