
import Category from "../categories/Category.js";
import Footer from "../footer/Footer";
import Header from "../header/header.js";
import FeatureProducts from "../products/FeatureProducts.js";
import ServiceOffered from "../service-offered/ServiceOffered.js";
import Slider from "../slider/Slider";

function Home() {
    return <>
        <Header />
        <Slider />
        <ServiceOffered />
        <Category />
        <FeatureProducts />
        <Footer />
    </>
}

export default Home;
