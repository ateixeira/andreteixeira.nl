import * as React from "react";
import { useEffect, useReducer, useRef } from 'react';
import { ControlConfig } from './types';
import "./style.scss";

// Constants
const FREQUENCY = 1000 / 60;
const SCALE = 0.3;
const OFFSET = 80;
const SPACESHIP_PATH = "M84.868,64.865c-2.589-2.306-5.567-4.338-8.929-6.021c-1.694-0.85-2.195-1.688-2.01-3.161c1.118-8.796,1.176-17.582-1.221-26.303c-2.966-10.8-9.554-20.312-20.385-29.145c-1.02-0.805-2.88-0.917-4.388,0.305c-4.874,3.951-9.039,8.254-12.42,12.946c-6.002,8.335-8.925,17.25-9.672,26.572c-0.481,5.974-0.067,11.931,0.677,17.882c0.04,0.306-0.156,0.74-0.464,0.941c-2.839,1.845-5.836,3.564-8.57,5.483c-3.334,2.339-5.018,5.254-5.11,8.635c-0.07,2.556,0.318,5.069,1.11,7.552c1.955,6.13,5.269,11.903,9.013,17.558c0.279,0.421,0.713,0.853,1.236,1.109c1.638,0.812,3.434,0.38,4.443-1.044c2.601-3.675,5.179-7.355,7.741-11.039c0.324-0.469,0.696-0.651,1.456-0.651c3.361,0.01,6.722-0.004,10.083-0.001v10.083c0,1.689,1.369,3.059,3.059,3.059c1.688,0,3.059-1.369,3.059-3.059V86.481c3.476-0.002,6.953,0.009,10.427-0.001c0.763-0.004,1.116,0.191,1.443,0.662c2.346,3.372,4.719,6.735,7.129,10.082c0.349,0.485,0.832,1.009,1.449,1.285c1.731,0.784,3.492,0.294,4.414-1.238c2.036-3.39,4.146-6.759,5.932-10.215c2.122-4.104,3.742-8.322,4.053-12.734C88.662,70.896,87.993,67.648,84.868,64.865z M31.282,84.34c-1.867,2.722-3.78,5.431-5.809,8.331c-3.312-5.672-6.376-11.199-7.11-17.211c-0.268-2.18-0.297-4.379,1.401-6.358c1.365-1.596,5.168-4.351,7.593-5.468c0.297,1.439,0.591,2.842,0.877,4.244c1.054,5.178,2.111,10.357,3.148,15.535C31.442,83.713,31.462,84.078,31.282,84.34z M65.698,70.58c-0.695,3.774-1.37,7.548-2.059,11.321c-0.019,0.106-0.055,0.212-0.096,0.357c-3.318,0.002-6.643,0.005-9.968,0.005V61.093c0-1.689-1.369-3.059-3.058-3.059c-1.689,0-3.059,1.369-3.059,3.059v21.176c-3.427,0.002-6.855,0.005-10.313,0.007c-0.634-3.083-1.317-6.059-1.847-9.049c-1.172-6.638-2.54-13.263-3.328-19.923c-1.104-9.357-0.537-18.669,3.176-27.772c2.791-6.851,7.189-13.108,13.292-18.745c0.553-0.511,1.09-1.028,1.639-1.542c0.042-0.039,0.12-0.058,0.312-0.146c0.975,0.892,2.006,1.771,2.941,2.699c5.052,5.012,8.938,10.45,11.483,16.37c2.634,6.134,3.772,12.427,3.938,18.828C68.994,52.261,67.384,61.423,65.698,70.58zM82.521,74.179c-0.29,4.109-1.966,7.999-3.862,11.842c-0.949,1.921-2.062,3.803-3.231,5.938c-2.083-2.974-4.008-5.698-5.903-8.438c-0.136-0.196-0.146-0.469-0.102-0.694c1.289-6.46,2.591-12.918,3.894-19.376c0.037-0.178,0.117-0.354,0.215-0.64c2.98,1.771,5.825,3.509,7.755,5.859C82.688,70.376,82.655,72.286,82.521,74.179z";
const SPACESHIP = new Path2D(SPACESHIP_PATH);

// Types
interface IProps {
  height: number;
  width: number;
}

interface GameConfig {
  position: [number, number];
  rotation: number;
}

type State =
  | { movement: 'UP', gameConfig: GameConfig, time?: number }
  | { movement: 'DOWN', gameConfig: GameConfig, time?: number }
  | { movement: 'RIGHT', gameConfig: GameConfig, time?: number }
  | { movement: 'LEFT', gameConfig: GameConfig, time?: number }

enum ActionTypes {
  KeyUp,
  KeyDown,
  Tick,
}

type Action =
  | { type: ActionTypes.KeyUp, payload: Event }
  | { type: ActionTypes.KeyDown, payload: Event }
  | { type: ActionTypes.Tick }

// Utilities
const registerListener = (eventName: string, handler: EventListenerOrEventListenerObject) => {
  window.addEventListener(eventName, handler);
  return () => window.removeEventListener(eventName, handler);
}

// Config
const Controls: ControlConfig = {
  movement: {
    up: [38],
    down: [40],
    left: [37],
    right: [39],
  },
  stopKey: 10,
  pauseKey: 11,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.KeyUp:
      return { ...state, movement: undefined };

    case ActionTypes.KeyDown:
      const payload = action.payload as KeyboardEvent;
      const { gameConfig } = state;
      const { position } = gameConfig;
      const { rotation } = gameConfig;

      if(Controls.movement.up.includes(payload.keyCode)){
        return { ...state, movement:  "UP", gameConfig: {...gameConfig, position: [position[0], position[1] - 1]}};
      } else if(Controls.movement.down.includes(payload.keyCode)){
        return { ...state, movement: "DOWN", gameConfig: { ...gameConfig, position: [position[0], position[1] + 1] } };
      } else if(Controls.movement.right.includes(payload.keyCode)){
        return { ...state, movement: "RIGHT", gameConfig: { ...gameConfig, rotation: rotation + 1 } };
      } else if(Controls.movement.left.includes(payload.keyCode)){
        return { ...state, movement: "LEFT", gameConfig: { ...gameConfig, rotation: rotation - 1 } };
      } else {
        return { ...state, movement: undefined };
      }

    case ActionTypes.Tick:
      const time = Date.now();
      const newState = { ...state, time };
      return { ...newState }
  }
}

function draw(ctx: CanvasRenderingContext2D, gameConfig: GameConfig) {
  ctx.fillStyle = "deepskyblue";
  ctx.shadowColor = "dodgerblue";
  ctx.shadowBlur = 20;
  ctx.save();
  ctx.translate(gameConfig.position[0] / SCALE - OFFSET, gameConfig.position[1] / SCALE - OFFSET);
  ctx.rotate(gameConfig.rotation * Math.PI / 180);
  ctx.fill(SPACESHIP);
  ctx.restore()
}

const Scene: React.FC<IProps> = (props) => {

  const [state, dispatch] = useReducer(reducer, { movement: undefined, gameConfig: {position: [props.width/2 || 0, props.height/2 || 0], rotation: 0} });
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    const onKeyDown = (e: Event) => dispatch({type: ActionTypes.KeyDown, payload: e});
    const onKeyUp = (e: Event) => dispatch({ type: ActionTypes.KeyUp, payload: e });

    // We want it to re-render no more than 60 fps.
    const tick = () => dispatch({ type: ActionTypes.Tick })
    const timerId = setInterval(tick, FREQUENCY)


    const unregisterKeydown = registerListener("keydown", onKeyDown)
    const unregisterKeyup = registerListener("keyup", onKeyUp)
    return () => {
      clearInterval(timerId);
      unregisterKeydown();
      unregisterKeyup();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
    draw(ctx, state.gameConfig);
  })

  return (
    <canvas width={props.width} height={props.height} ref={canvasRef} ></canvas>
  );
};

export default Scene;
