import Sequelize, {Model}  from 'sequelize'

class Chamado extends Model{
    static init(sequelize){
        super.init(
            { 
              assunto: Sequelize.STRING,
              status: Sequelize.STRING,
              complemento: Sequelize.STRING
        },
        {sequelize}
        );

        return this;
    }

    static associate(models){
        this.belongsTo(models.Cliente, {foreignKey: 'cliente_id'});
    }

    
}

export default Chamado;