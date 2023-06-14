import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react";
import styles from './Header.module.css';
import logoHeader from './imgs/logoHeader.svg'
export function Header() {
  return (
     
      <header className={styles.header}>
      <img src={logoHeader} alt="logotipo" />
      
      <div className={styles.links}>
        <a href="#">Home</a>
        <a href="#">Register</a>
        <a href="#">Products</a>
        <a href="#">About us</a>
      </div>

      <div className={styles.login}>
      
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    
      </div>
          
      </header>
  
  )
}