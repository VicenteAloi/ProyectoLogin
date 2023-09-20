import { DataTypes } from "sequelize";
import sequelize from "../db/connection";


export const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.REAL
  },
  stock: {
    type: DataTypes.INTEGER
  },
  date_register: {
    type: DataTypes.STRING
  },
  date_updated: {
    type: DataTypes.STRING
  }
})