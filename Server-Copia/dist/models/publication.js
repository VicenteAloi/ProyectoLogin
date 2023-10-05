"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publication = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Publication = connection_1.default.define('publication', {
    idAdministrator: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    idProduct: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    datePublication: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        primaryKey: true
    }
});
