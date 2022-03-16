import HomeCarousel from "../components/carousel/HomeCarousel";
import HomeItemContainer from "../components/HomeItemContainer/HomeItemContainer"

import './HomeView.css'

const Home = () => {
return <div class='HomeView'>
    <h1>Bienvenido a Claw Shop</h1>
    <HomeCarousel/>
    <h2 style={{ marginTop:'50px'}}>Nuestros nuevos Peluches King Size</h2>
    <HomeItemContainer/>
    {/* <ItemSlider/> */}
</div> 
};
export default Home;