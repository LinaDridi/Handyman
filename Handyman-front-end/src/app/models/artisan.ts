export class Artisan {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  birth: string;
  address: string;
  job: string;
  phone: string;
  rate: number;
  type: string;
  description: string;
  img: string;
  roles: string[];
  Schedule_id: any;
  availability_id: any;
  services: string[];
  projects: any;

  // tslint:disable-next-line:max-line-length
  constructor(firstName: string, lastName: string, username: string, email: string, password: string, birth: string, address: string, job: string, phone: string, type: string, description: string, img: string,service:string[]) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.birth = birth;
    this.address = address;
    this.job = job;
    this.phone = phone;
    this.type = type;
    this.description = description;
    this.img = img;
    this.services=service;
    this.roles = ['artisan'];
  }

}
