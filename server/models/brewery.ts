export class Brewery {

  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;

  constructor(name: string, address: string, city: string, state: string, zipcode: string) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address + ', ' + this.city + ', ' + this.state + ' ' + this.zipcode;
  }
}
