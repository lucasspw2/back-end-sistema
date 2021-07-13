import Sequelize, {Model}  from 'sequelize'

class Cliente extends Model{
    static init(sequelize){
        super.init(
            { clientenome: Sequelize.STRING,
              cnpj: Sequelize.STRING,
              endereço: Sequelize.STRING
        },
        {sequelize}
        );

        return this;
    }

    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'user_id'});
        
    }

    
}

export default Cliente;