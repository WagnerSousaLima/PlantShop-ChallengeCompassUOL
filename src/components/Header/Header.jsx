import {
  Link,
  NavLink
} from 'react-router-dom';
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
        <NavLink to="/" activeclassname={styles.activeLink} exact="true">Home</NavLink>
        <NavLink to="/registration" activeclassname={styles.activeLink}>Register</NavLink>
        <NavLink to="/product" activeclassname={styles.activeLink}>Products</NavLink>
        <NavLink to="/about-us" activeclassname={styles.activeLink}>About us</NavLink>
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
  );
}

export default Header;
