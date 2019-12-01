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
  rate: string;
  type: string;
  description: string;
  img: string;
  role: string[];
  Schedule_id: any;
  availability_id: any;
  services: any;
  projects: any;

  // tslint:disable-next-line:max-line-length
  constructor(firstName: string, lastName: string, username: string, email: string, password: string, birth: string, address: string, job: string, phone: string, type: string, description: string, img: string) {
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
    this.role = ['user'];
  }
}
