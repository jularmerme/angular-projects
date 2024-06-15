export class Employee {
  id: number;
  name: string;
  lastname: string;
  area: string;
  email: string;

  constructor(
    id: number,
    name: string,
    lastname: string,
    area: string,
    email: string
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.area = area;
    this.email = email;
  }
}
