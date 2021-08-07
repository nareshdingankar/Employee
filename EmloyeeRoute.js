"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeeController_1 = require("../controllers/EmployeeController");
const employeeRoute = express_1.Router();
employeeRoute.get("/employees", EmployeeController_1.EmployeeController.getAllEmployees);
exports.default = employeeRoute;
