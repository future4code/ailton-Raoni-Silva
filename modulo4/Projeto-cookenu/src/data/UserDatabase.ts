import { UserBD } from './../Model/userTypes';
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
  public getById = async (id: string): Promise<UserBD | undefined>  => {
            const result = await this.getConnection()('projeto_cookenu')
            .select("*")
                .where({ id })
      
              const user: UserBD = {
                  id: result[0].id,
                  name: result[0].name,
                  email: result[0].email
              }
      
              return user
        }

  public async insertFollow(idSeguir: string, idSeguido: string): Promise<string> {

          await this.getConnection()
              .insert({
                  id_seguir: idSeguir,
                  id_seguido: idSeguido
              }).into("seguidores")
  
          return `Pessoa com id ${idSeguir} esta seguindo a pessoa com id ${idSeguido}`
      }

}


