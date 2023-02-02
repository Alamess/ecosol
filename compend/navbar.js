import styles from '../styles/Home.module.css'
const logo = new URL("./LOGO.png",import.meta.url) ;
const Navbar = () => {
    return (
        <nav className={styles.nav}>
          <a  href="/" ><img src={logo} alt="logo" width="180px" /></a>
            <ul >
              <li><a href="/Articles"> Articles</a></li>
              <li><a href="/Services">  Services</a></li>
              <li><a href="/Projets Référents"> Projets Référents</a></li>
              <li><a href="/Contact"> Contact</a></li>
              <li><a href="/Formulaire du devis"> Formulaire du devis</a></li>
              <li><a href="#">FR ▼ </a>
                <ul class={styles.dropdown}>
                <li><a href="/">  FR</a></li>
                  <li><a href="/AR"> AR</a></li>
                </ul>
              </li>
        </ul>
        </nav>
      );
}

export default Navbar ;