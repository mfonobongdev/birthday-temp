import Masonry from "react-masonry-css";
import "./styles.scss";
const MasonryGrid = ({images}) => {
  // const breakpointColumnsObj = {
  //     default: 4,
  //     1100: 3,
  //     700: 2,
  //     500: 1
  //   };
  console.log(images);
  const items = images.map((img, i) => (
    <div key={i}>
      <img src={img} alt="post" />
    </div>
  ));
  return (
    <Masonry
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items}
    </Masonry>
  );
};

export default MasonryGrid;
