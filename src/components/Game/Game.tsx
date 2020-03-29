import * as React from "react";
import "./style.scss";
import { useRef, useLayoutEffect, useState } from "react";
import { Scene } from ".";

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
  const sceneWrapperRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [width, height] = useWindowSize();


  return (
    <div className='scene-wrapper' ref={sceneWrapperRef}>
      <Scene width={width} height={height} />
    </div>
  );
};

export default Game;
