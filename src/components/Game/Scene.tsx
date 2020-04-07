import * as React from "react";
import { useEffect, useReducer, useRef } from 'react';
import { ControlConfig } from './types';
import SpaceShip from './SpaceShip';
import "./style.scss";

// Constants
const FREQUENCY = 1000 / 60;
const SPACESHIP_WIDTH = 156;
const SPACESHIP_HEIGHT = 97.5;

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
        return { ...state, movement: "RIGHT", gameConfig: { ...gameConfig, rotation: rotation + 5 } };
      } else if(Controls.movement.left.includes(payload.keyCode)){
        return { ...state, movement: "LEFT", gameConfig: { ...gameConfig, rotation: rotation - 5 } };
      } else {
        return { ...state, movement: undefined };
      }

    case ActionTypes.Tick:
      const time = Date.now();
      const newState = { ...state, time };
      return { ...newState }
  }
}

const Scene: React.FC<IProps> = (props) => {

  const [state, dispatch] = useReducer(reducer, { movement: undefined, gameConfig: {position: [props.width/2 || 0, props.height/2 || 0], rotation: 0} });
  const svgRef: React.RefObject<SVGSVGElement> = useRef(null);

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

  return (
    <svg width={props.width} height={props.height} ref={svgRef} >
      <g transform={`translate(${state.gameConfig.position[0]}, ${state.gameConfig.position[1]}) rotate(${state.gameConfig.rotation} ${SPACESHIP_WIDTH / 2} ${SPACESHIP_HEIGHT/2})`}>
        <SpaceShip height={SPACESHIP_HEIGHT} width={SPACESHIP_WIDTH} rotation={state.gameConfig.rotation}/>
      </g>
    </svg>
  );
};

export default Scene;
