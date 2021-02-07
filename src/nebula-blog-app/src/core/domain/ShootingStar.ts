export default class ShootingStar {
  public x = 0;

  public y = 0;

  public len = 0;

  public speed = 0;

  public size = 0;

  public wait = 0;

  public active = false;

  constructor(
    private readonly boundWidth: number,
    private readonly boundHeight: number,
  ) {
    this.reset();
  }

  public isOut(): boolean {
    return this.x < 0 || this.y >= this.boundHeight;
  }

  public update(): void {
    if (this.active) {
      this.x -= this.speed;
      this.y += this.speed;
      if (this.isOut()) {
        this.reset();
      }
    } else if (this.wait < new Date().getTime()) {
      this.active = true;
    }
  }

  public reset(): void {
    this.x = Math.random() * this.boundWidth;
    this.y = 0;
    this.len = (Math.random() * 80) + 10;
    this.speed = (Math.random() * 10) + 6;
    this.size = Math.random() + 0.1;
    this.wait = new Date().getTime() + (Math.random() * 3000) + 500;
    this.active = false;
  }
}
