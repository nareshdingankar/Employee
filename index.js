"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = exports.Employee = void 0;
const config_1 = __importDefault(require("../config/config"));
const Employee_1 = require("./Employee");
const Department_1 = require("./Department");
exports.Employee = Employee_1.EmployeeInit(config_1.default);
exports.Department = Department_1.DepartmentInit(config_1.default);
config_1.default.sync();
