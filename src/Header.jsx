import styles from './Header.module.css';
import logoHeader from './assets/logoHeader.svg'
export function Header() {
  return (
     
      <header className={styles.header}>
      <img src={logoHeader} alt="logotipo" />
      
      <div className={styles.links}>
        <a href="">Home</a>
        <a href="">Register</a>
        <a href="">Products</a>
        <a href="">About us</a>
      </div>

      <div className={styles.login}>
        <a href="">Login</a>
      </div>
          
      </header>
  
  )
}