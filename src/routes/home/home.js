import Directory from "../../components/directory/directory";
import Banner from "../../components/home-components/banner/banner";
import HomeProducts from "../../components/home-components/home-products/home-products";

const Home = () => {
  return (
    <div>
      <Directory />
      <HomeProducts />
      <Banner />
    </div>
  );
};

export default Home;
