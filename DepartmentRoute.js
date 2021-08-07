"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DepartmentController_1 = require("../controllers/DepartmentController");
const departmentRoute = express_1.Router();
departmentRoute.get("/departments", DepartmentController_1.DepartmentController.getDepartments);
exports.default = departmentRoute;
