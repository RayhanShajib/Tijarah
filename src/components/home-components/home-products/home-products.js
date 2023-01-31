import { useSelector } from "react-redux";
import Spinner from '../../spinner/spinner';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/category.selector";
import HomeCategoryPreview from "../home-category-preview/home-category-preview";

const HomeProducts = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div className="home-products">
      <h2>New Products</h2>
        {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <HomeCategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </div>
  );
};

export default HomeProducts;
