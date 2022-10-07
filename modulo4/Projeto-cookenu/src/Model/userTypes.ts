export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getRole() {
    return this.role;
  }

  static toUserModel(data: any): User {
    return new User(data.id, data.name, data.email, data.password, data.role);
  }
}

export interface UserBD {
  id: string,
  name: string,
  email: string
}

export interface feedDB {
  id:string,
  title: string,
  description:string,
  createdAt:string,
  userId: string,
  userName: string
}


