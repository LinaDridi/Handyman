export class Client {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;


    // tslint:disable-next-line:max-line-length
    constructor(firstName: string, lastName: string, username: string, email: string, password: string) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.username = username;
        this.email = email;
        this.password = password;

    }

}


