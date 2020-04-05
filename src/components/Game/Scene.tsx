import * as React from "react";
import { useEffect, useReducer } from 'react';
import { ControlConfig } from './types';
import "./style.scss";

// Types
interface IProps {
  height: number;
  width: number;
}

type State =
  | { movement: 'UP' }
  | { movement: 'DOWN' }
  | { movement: 'RIGHT' }
  | { movement: 'LEFT' }

enum ActionTypes {
  KeyUp,
  KeyDown,
}

type Action =
  | { type: ActionTypes.KeyUp, payload: Event }
  | { type: ActionTypes.KeyDown, payload: Event }

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
      return { movement: undefined };

    case ActionTypes.KeyDown:
      const payload = action.payload as KeyboardEvent;
      if(Controls.movement.up.includes(payload.keyCode)){
        return { ...state, movement:  "UP"};
      } else if(Controls.movement.down.includes(payload.keyCode)){
        return { ...state, movement:  "DOWN"};
      } else if(Controls.movement.right.includes(payload.keyCode)){
        return { ...state, movement:  "RIGHT"};
      } else if(Controls.movement.left.includes(payload.keyCode)){
        return { ...state, movement:  "LEFT"};
      }
  }
}

const Scene: React.FC<IProps> = (props) => {

  const [state, dispatch] = useReducer(reducer, { movement: undefined });

  console.log("STATE");
  console.log(state);

  useEffect(() => {
    const onKeyDown = (e: Event) => dispatch({type: ActionTypes.KeyDown, payload: e});
    const onKeyUp = (e: Event) => dispatch({ type: ActionTypes.KeyUp, payload: e });


    const unregisterKeydown = registerListener("keydown", onKeyDown)
    const unregisterKeyup = registerListener("keyup", onKeyUp)
    return () => {
      unregisterKeydown()
      unregisterKeyup()
    }
  }, [])

  return (
    <canvas width={props.width} height={props.height} ></canvas>
  );
};

export default Scene;
