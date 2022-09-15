import { User } from "../Model/userTypes";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User) {
    try {
      await this.getConnection()("projeto_cookenu").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.getConnection()("projeto_cookenu")
        .select("*")
        .where({ email });
      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public getById = async (id: string): Promise<User> => {
            const result = await this.getConnection()('projeto_cookenu')
                .where({ id })
            return result[0] && User.toUserModel(result[0]);
        }

}


