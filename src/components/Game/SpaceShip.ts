import { ValidMovements } from './types';

export interface Speed {
  dx: number;
  dy: number;
  magnitude: number;
  rotation: number;
}

class SpaceShip {

  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private speed: Speed;
  private path: any[];

  constructor(x: number, y: number, width: number, height: number) {
    this.speed = {
        dx : 0,
        dy : 0,
        magnitude : 1,
        rotation: 0,
    };
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.path = [];
  };

  // draw(ctx: CanvasRenderingContext2D, state: any): void {
  //   ctx.translate(40 + this.x, 80 + this.y);
  //   ctx.rotate(state.gameConfig.rotation_speed * Math.PI / 180);
  //   ctx.translate(-(40 + this.x), -(80 + this.y));

  //   ctx.beginPath();
  //   // Draw left side of the spaceship
  //   ctx.moveTo(20 + this.x, 100 + this.y);
  //   ctx.bezierCurveTo(19 + this.x, 76 + this.y, 14 + this.x, 41 + this.y, 40 + this.x, 20 + this.y);
  //   // Draw right side of the spaceship
  //   ctx.moveTo(60 + this.x, 100 + this.y);
  //   ctx.bezierCurveTo(61 + this.x, 76 + this.y, 66 + this.x, 41 + this.y, 40 + this.x, 20 + this.y);
  //   // Draw bottom of the spaceship
  //   ctx.moveTo(20 + this.x, 100 + this.y);
  //   ctx.lineTo(60 + this.x, 100 + this.y);

  //   ctx.stroke();
  // }
  draw(ctx: CanvasRenderingContext2D, state: any): void {
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.translate(this.width / 2, this.height / 2);
    ctx.rotate(this.speed.rotation * Math.PI / 180);
    ctx.translate(- this.width / 2, - this.height / 2);

    ctx.strokeRect(0, 0, this.width, this.height);
  }
  // draw(ctx: CanvasRenderingContext2D, state: any): void {
  //   console.log("D R A W");
  //   console.log("this.speed.rotation");
  //   console.log(this.speed.rotation);

  //   ctx.translate(40 + this.x, 80 + this.y);
  //   ctx.rotate(this.speed.rotation * Math.PI / 180);
  //   ctx.translate(-(40 + this.x), -(80 + this.y));

  //   ctx.beginPath();
  //   // Draw left side of the spaceship
  //   ctx.moveTo(20 + this.x, 100 + this.y);
  //   ctx.bezierCurveTo(19 + this.x, 76 + this.y, 14 + this.x, 41 + this.y, 40 + this.x, 20 + this.y);
  //   // Draw right side of the spaceship
  //   ctx.moveTo(60 + this.x, 100 + this.y);
  //   ctx.bezierCurveTo(61 + this.x, 76 + this.y, 66 + this.x, 41 + this.y, 40 + this.x, 20 + this.y);
  //   // Draw bottom of the spaceship
  //   ctx.moveTo(20 + this.x, 100 + this.y);
  //   ctx.lineTo(60 + this.x, 100 + this.y);

  //   ctx.stroke();
  // }

  move(movement: ValidMovements) {
    if (movement === "UP") {
    } else if (movement === "DOWN") {
    } else if (movement === "LEFT") {
      this.speed = {
        ...this.speed,
        rotation: this.speed.rotation - 1,
      };
    } else if (movement === "RIGHT") {
      this.speed = {
        ...this.speed,
        rotation: this.speed.rotation + 1,
      };
    }
  }
}

export default SpaceShip;
