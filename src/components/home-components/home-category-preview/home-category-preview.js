import ProductCard from "../../product-card/product-card";

const HomeCategoryPreview = ({ products }) => {
  return (
    <div className="category-preview-container">
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomeCategoryPreview;