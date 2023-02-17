'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usertable', {
      id:{type:sequelize.INTEGER, unique:true, allowNull:false, primaryKey:true, autoIncrement:true},
      firstname:{type:sequelize.STRING, allowNull:false},
      lastname:{type:sequelize.STRING, allowNull:false},
      email:{type:sequelize.STRING, allowNull:false, unique:true},
      password:{type:sequelize.STRING, allowNull:false},
      confirmpassword:{type:sequelize.STRING, allowNull:false},
      gender:{type:sequelize.STRING, allowNull:false},
      dob:{type:sequelize.STRING, allowNull:false},
      tel:{type:sequelize.STRING, allowNull:false},
      city:{type:sequelize.STRING, allowNull:false},
      state:{type:sequelize.STRING, allowNull:false},
      country:{type:sequelize.STRING, allowNull:false},
      roles:{type:sequelize.STRING, allowNull:false}
       })
      
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
