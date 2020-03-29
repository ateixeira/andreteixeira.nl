import * as React from "react";
import "./style.scss";

interface IProps {
  height: number;
  width: number;
}

const Scene: React.FC<IProps> = (props) => {

  return (
    <canvas width={props.width} height={props.height} ></canvas>
  );
};

export default Scene;
