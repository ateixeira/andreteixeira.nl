import * as React from "react";
import "./style.scss";
import { useRef, useEffect, useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Game: React.FC<{}> = (props) => {
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null);
  const [width, height] = useWindowSize();

  useEffect(() => {
    // code to run on component mount
    console.log("width ", width);
    console.log("height ", height);
    if (!!canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
  }, [width, height]);

  return (
    <canvas ref={canvasRef}></canvas>
  );
};

export default Game;
