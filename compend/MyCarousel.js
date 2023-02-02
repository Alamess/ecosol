
import styles from '../styles/Home.module.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function MyCarousel () {
  const breakPoints = [
    { width: 1, itemsToShow: 1 }
  ];
  const IMG0 = new URL("./IMG0.jpg",import.meta.url) ;
  const IMG1 = new URL("./IMG1.jpg",import.meta.url) ;
  const IMG2 = new URL("./IMG2.jpg",import.meta.url) ;
  const IMG4 = new URL("./IMG4.jpg",import.meta.url) ;
  
  
  return (
    <Carousel breakPoints={breakPoints} autoPlay  >
      <div className={styles.carou}>
        <div className={styles.text}>
          <h1>Le conseil, l'étude et</h1>
          <br/>
          <h1>l'installation photovoltaique</h1>
          <br/>
          <h1>C'est notre mission !</h1>
          <br/>
          <br />
          <p>Ecosolutions Tunisie créée en 2020 par des jeunes originaires</p>
          <p>des régions intérieures Kasserine et Gafsa afin de promouvoir</p>
          <p>l'utilisation des énergies renouvelables dans ces régions</p>
        </div>
      </div>
      <div className={styles.image}>
          <img src={IMG0} alt="IMG0"  />
      </div>
      <div className={styles.image}>
          <img src={IMG1} alt="IMG1"  />
      </div>
      <div className={styles.image}>
          <img src={IMG2} alt="IMG2"  />
      </div>
      <div className={styles.image}>
          <img src={IMG4} alt="IMG4"  />
      </div>
  </Carousel>
  )

}
    export default MyCarousel;







