export class NewService {
  id: number;
  services: string [];

  constructor(id: number, services: string[]) {
    this.id = id;
    this.services = services;
  }
}
