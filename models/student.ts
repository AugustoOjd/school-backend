// import { Sequelize, DataTypes } from 'sequelize';
// import { sequelize } from '../db/dbConnection';


// const Student = sequelize.define('Student', {
//     id:{
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true
//     },
//     name:{
//         type: DataTypes.STRING
//     },
//     lastName:{
//         type: DataTypes.STRING
//     },
//     email:{
//         type: DataTypes.STRING
//     },
//     password:{
//         type: DataTypes.STRING
//     },
//     state:{
//         type: DataTypes.BOOLEAN,
//         defaultValue: true
//     },
//     role:{
//         type: DataTypes.STRING,
//         defaultValue: 'student'
//     },
//     country:{
//         type: DataTypes.STRING
//     },
//     point:{
//         type: DataTypes.INTEGER,
//         defaultValue: 0
//     },
// })

// export default Student

import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

import { sequelize } from '../db/dbConnection';

// We recommend you declare an interface for the attributes, for stricter typechecking

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<string>;
  name:       string,
  lastName:   string,
  password:   string,
  email:      string,
  state:      boolean,
  role:       string,
  country:    string,
  point:      number,
  nivel:      number,  

  createdAt?: string,
  updatedAt?: string
}

const Student = sequelize.define<UserModel>('Student', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    role:{
        type: DataTypes.STRING,
        defaultValue: 'student'
    },
    country:{
        type: DataTypes.STRING
    },
    point:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    nivel: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

export default Student

