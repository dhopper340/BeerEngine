export class Beer {

  name: string;
  style: string;

  constructor(name: string, style: string) {
      this.name = name;
      this.style = style;
  }

  getName() {
      return this.name;
  }

  getStyle() {
      return this.style;
  }
}
