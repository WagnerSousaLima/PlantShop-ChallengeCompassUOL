import styles from './AboutUs.module.css';
import Logo from './images/linkedin.svg';
import Plant from './images/left plant.svg'
import Kiko from './images/kiko.jfif'

const AboutUs = () => {
    return (
        <div className={styles.main}>
            <section className={styles.Container}>
                <div className="AboutUs">
                    <h2>About Us</h2>
                    <hr/>
                    <p className={styles.aboutText}>texto texto texto texto texto texto texto texto texto texto texto 
                        texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
                        texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
                        texto texto texto </p>
                </div>
                <img className={styles.Plant} src={Plant} alt="plant"/>
            </section>
            <section className={styles.DevelopersBody}>
                <h2>Developers</h2>
                <div className={styles.Body}> 
                    <div className={styles.Developers}>
                        <div className={styles.Detail} />
                        <img src={Kiko} className={styles.Photo}/>
                        <h3>Amanda</h3>
                        <p id={styles.All}>texto</p>
                        <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                    </div>
                    <div className={styles.Developers}>
                        <img src={Kiko} className={styles.Photo}/>
                        <h3>Cintia</h3>
                        <p id={styles.All}>texto</p>
                        <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                    </div>
                    <div className={styles.Developers}>
                        <img src={Kiko} className={styles.Photo}/>
                        <h3>Eduardo</h3>
                        <p id={styles.All}>texto</p>
                        <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                    </div>
                    <div className={styles.Developers}>
                        <img src={Kiko} className={styles.Photo}/>
                        <h3>Giovanna</h3>
                        <p id={styles.All}>texto</p>
                        <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                    </div>
                    <div className={styles.Developers}>
                        <img src={Kiko} className={styles.Photo}/>
                        <h3>João</h3>
                        <p id={styles.All}>texto</p>
                        <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                    </div>
                    <div className={styles.Developers}>
                        <img src={Kiko} className={styles.Photo}/>
                        <h3>Wagner</h3>
                        <p id={styles.All}>texto</p>
                        <img className={styles.Logo} src={Logo} alt="logoLinkedin" />
                    </div>                
                </div>
            </section>
        </div>
    )
}

export default AboutUs;