import Header from './Header';
import SubmitRequest from './SubmitRequest';
import Benefits from './Benefits';
import Customer from './Customer';
import Footer from './Footer';
import Slider from "../components/Slider"
import ImageSlider from "../components/ImageSlider"

import styles from "./App.module.css"
import ProjectImage from './ProjectImage';
import KleinSlider from '../components/KleinSlider';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className={styles.App_container}>
      <Header />
      <SubmitRequest />
      <KleinSlider />
      <Benefits />
      <ProjectImage />

      {/* <Slider /> */}
      {/* <ImageSlider/> */}

      <Customer />
      <AboutUs />
      <Footer />
    </div>
  );
}
export default App;