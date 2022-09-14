// import { Sequelize, DataTypes } from 'sequelize';
// import { sequelize } from '../db/dbConnection';


// export const Admin = sequelize.define( 'Admin', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name:{
//         type: DataTypes.STRING
//     },
//     lastName:{
//         type: DataTypes.STRING
//     },
//     password:{
//         type: DataTypes.STRING
//     },
//     state:{
//         type: DataTypes.BOOLEAN
//     },
//     role:{
//         type: DataTypes.STRING
//     }
// })

import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

import { sequelize } from '../db/dbConnection';

// We recommend you declare an interface for the attributes, for stricter typechecking

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<string>;
  name:       string,
  lastName:   string,
  email:      string,
  password:   string,
  state:      boolean,
  role:       string

  createdAt?: string,
  updatedAt?: string
}

const Admin = sequelize.define<UserModel>('Admin', {
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
        defaultValue: 'admin'
    }
});

export default Admin

