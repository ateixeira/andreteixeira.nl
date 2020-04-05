export interface ControlMovement {
  up: number[],
  down: number[],
  left: number[],
  right: number[],
}

export interface ControlConfig {
  movement: ControlMovement;
  stopKey: number;
  pauseKey: number;
}
