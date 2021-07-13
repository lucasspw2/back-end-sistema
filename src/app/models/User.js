import  Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';


class User extends Model{
    static init(sequelize){
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            foto: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            fotourl: Sequelize.STRING,
        },
        {
            sequelize,
        }
      )
   
      this.addHook('beforeSave', async(user) =>{
          if(user.password){
              user.password_hash = await bcrypt.hash(user.password, 8)

          }

        
      });

      return this;
   
   
    }

    checkpassword(password){
        return bcrypt.compare(password, this.password_hash);
    }

}


export default User;