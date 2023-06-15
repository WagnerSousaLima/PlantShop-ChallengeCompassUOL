import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react";
import styles from './Header.module.css';
import logoHeader from './imgs/logoHeader.svg'
import avatarLogin from './imgs/loginPhoto.png'


export function Header() {
  return (
     
    <header className={styles.header}>

      <div className={styles.imgVetor}>
        <img src={logoHeader} alt="logotipo" />
      </div>
      
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
          <SignInButton mode='modal'>
            <button>
              <img src={avatarLogin} alt="imagem do link de login" />
            </button>
          </SignInButton>
        </SignedOut>
    
      </div>
          
      </header>
  
  )
}