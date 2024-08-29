import ReactLoading, { LoadingType } from "react-loading";

interface LoaderProps {
  type?: LoadingType; //  default balls
  color?: string; // #ffff default
  width?: string;
  height?: string;
}
const Loader = ({
  type,
  color,
  width = "100%",
  height = "100%",
}: LoaderProps) => {
  return (
    <ReactLoading type={type} color={color} width={width} height={height} />
  );
};

export default Loader;
