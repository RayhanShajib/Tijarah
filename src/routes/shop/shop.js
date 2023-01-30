import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";
import { fetchCategoriesStart } from "../../store/categories/category.reducer";
import "./shop.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  // use Effect
  useEffect(() => {
    dispatch(fetchCategoriesStart())
  });
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
