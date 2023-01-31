import { Link } from "react-router-dom";
import "./banner.scss";
import Button from "../../button/button.component";

const Banner = () => {
  return (
    <div class="banner-wrapper">
      <div class="banner-container">
        <div class="title-section">
          <div class="sup-title">
            <span>NEW TREND 2023</span>
          </div>
          <h2 class="title">Women‘s Collection</h2>
          <div class="description">
            <span>Big Sale of this Week</span>
          </div>
        </div>
        <Link to="/shop/womens">
          {" "}
          <Button buttonType="inverted">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
