import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-pry-5 bg-opacity-20">
      <ThreeDots color="#333" />
    </div>
  );
};

export default Loader;
