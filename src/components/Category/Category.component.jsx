import CategoryItem from "../category-item/Category-item.component";
import "./categories.styles.scss";
const Category = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem {...category} key={category.id}/>;
      })}
    </div>
  );
};

export default Category;
