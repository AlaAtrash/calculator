export class Trigo {
  angleNumber: number;

  constructor(angle:number){
    this.angleNumber = angle
  };

  sinus(): number {
    return Math.sin(this.angleNumber);
  }

  cosinus(): number {
    return Math.cos(this.angleNumber);
  }
}
