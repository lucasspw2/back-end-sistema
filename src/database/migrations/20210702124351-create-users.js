'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('users', 
      { id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
        },
      
         email:{
         type: Sequelize.STRING,
         allowNull: false,
         unique: true,
        },
      
         password_hash:{
         type: Sequelize.STRING,
         allowNull: false,
        } ,
      
         foto:{
         type: Sequelize.STRING,
         allowNull: true,
        },

         fotourl:{
         type:Sequelize.STRING,
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
