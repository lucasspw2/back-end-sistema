'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('clientes', { 
       id:{
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
        primaryKey: true,
       },
       clientenome:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       cnpj:{
         type: Sequelize.STRING,
         allowNull: false
       },
       endereço:{
         type: Sequelize.STRING,
         allowNull: false
       },
       user_id :{
         type: Sequelize.INTEGER,
         references: { model: 'users' , key: 'id'},
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL',
         allowNull: false,
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
