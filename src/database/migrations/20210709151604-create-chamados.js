'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.createTable('chamados', { 
        id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        cliente_id :{
          type: Sequelize.INTEGER,
          references: { model: 'clientes' , key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false, 
        },
   
        assunto:{
          type: Sequelize.STRING,
          allowNull: false,
        } ,
        
        status:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        
        complemento:{
          type: Sequelize.STRING,
          allowNull: true,
        }, 
         
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },

        updated_at:{
          type:Sequelize.DATE,
          allowNull: false
        }

      
      
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
