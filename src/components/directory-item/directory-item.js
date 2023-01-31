import { useNavigate } from "react-router-dom";
import "./directory-item.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="elm-btn">
        <h2 className="themesflat-button">{title}</h2>
      </div>
    </div>
  );
};

export default DirectoryItem;
