import * as React from "react";
import { useEffect, useReducer, useRef, useCallback } from 'react';
import { ControlConfig, ValidMovements } from './types';
import SpaceShip from './SpaceShip';


import "./style.scss";

// Constants
const FREQUENCY = 1000 / 60;

// Types
interface IProps {
  height: number;
  width: number;
}

interface GameConfig {
  position: [number, number];
  rotation_speed: number;
}

interface State { 
  movement: ValidMovements;
  gameConfig: GameConfig;
  time?: number;
}

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

      if(Controls.movement.up.includes(payload.keyCode)){
        return { ...state, movement:  "UP"};
      } else if(Controls.movement.down.includes(payload.keyCode)){
        return { ...state, movement: "DOWN" };
      } else if(Controls.movement.right.includes(payload.keyCode)){
        return { ...state, movement: "RIGHT" };
      } else if(Controls.movement.left.includes(payload.keyCode)){
        return { ...state, movement: "LEFT" };
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

  const getInitialState = (): State => {
    return {
      movement: undefined,
      gameConfig: {
        position: [props.width / 2 || 0, props.height / 2 || 0],
        rotation_speed: 0
      }
    }
  }

  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null);
  const [state, dispatch] = useReducer(reducer, getInitialState());

  const spaceship = new SpaceShip(props.width / 2, props.height / 2, 80, 160);

  const draw = useCallback(
    () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.height, canvasRef.current.width);

      spaceship.draw(ctx, state);
    },
    [spaceship, state]
  )
  /**
   * 
   */
  useEffect(() => {
    const onKeyDown = (e: Event) => dispatch({type: ActionTypes.KeyDown, payload: e});
    const onKeyUp = (e: Event) => dispatch({ type: ActionTypes.KeyUp, payload: e });

    // // We want it to re-render no more than 60 fps.
    // const tick = () => dispatch({ type: ActionTypes.Tick })
    // const timerId = setInterval(tick, FREQUENCY)


    const unregisterKeydown = registerListener("keydown", onKeyDown)
    const unregisterKeyup = registerListener("keyup", onKeyUp)
    return () => {
      // clearInterval(timerId);
      unregisterKeydown();
      unregisterKeyup();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    
    spaceship.move(state.movement);

  }, [spaceship, state.movement]);

  useEffect(() => {
    draw();
  }, [draw, state.time]);



  return (
    <canvas width={props.width} height={props.height} ref={canvasRef}></canvas>
  );
};

export default Scene;
