const sequelize = require('../connection/database')

const { DataTypes, Model } = require('sequelize');

class User extends Model{}

User.init({
    id:{type:DataTypes.INTEGER, unique:true, allowNull:false, primaryKey:true, autoIncrement:true},
      firstname:{type:DataTypes.STRING, allowNull:false},
      lastname:{type:DataTypes.STRING, allowNull:false},
      email:{type:DataTypes.STRING, allowNull:false, unique:true},
      password:{type:DataTypes.STRING, allowNull:false},
      confirmpassword:{type:DataTypes.STRING, allowNull:false},
      gender:{type:DataTypes.STRING, allowNull:false},
      dob:{type:DataTypes.STRING, allowNull:false},
      tel:{type:DataTypes.STRING, allowNull:false},
      city:{type:DataTypes.STRING, allowNull:false},
      state:{type:DataTypes.STRING, allowNull:false},
      country:{type:DataTypes.STRING, allowNull:false},
      roles:{type:DataTypes.STRING, allowNull:false}
       },
{
    modelName:'usertable',
    sequelize,
    tableName:'usertable',
    timestamps:false 
})

module.exports = User;