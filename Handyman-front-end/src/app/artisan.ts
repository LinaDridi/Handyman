export class Artisan {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  // role: string[];
  password: string;
  birth: string;

  address: string;
  job: string;
  phone: string;
  type: string;
  description: string;
  img: string;

  // tslint:disable-next-line:max-line-length
  constructor(firstName: string, lastName: string, username: string, email: string, password: string, birth: string, address: string, job: string, phone: string, type: string, description: string, img: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    // this.role = ['user'];
    this.password = password;
    this.birth = birth;
    this.address = address;
    this.job = job;
    this.phone = phone;
    this.type = type;
    this.description = description;
    this.img = img;
  }
}
