"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentController = void 0;
const models_1 = require("../models");
class DepartmentController {
    static async getDepartments(req, res) {
        let httpreplyStatus, replyMessage;
        try {
            const departments = await models_1.Department.findAll();
            if (departments) {
                httpreplyStatus = 200;
                replyMessage = {
                    status: "Success",
                    Department: departments
                };
            }
            res.status(httpreplyStatus).json(replyMessage);
        }
        catch (e) {
            httpreplyStatus = 500;
            replyMessage = {
                status: "Fail",
                message: "GENERAL SERVER ERROR"
            };
            res.status(httpreplyStatus).json(replyMessage);
        }
    }
    static async addDepartments(req, res) {
        let httpreplyStatus, replyMessage;
        try {
            const deptName = req.body.deptName;
            const departments = await models_1.Department.create({
                DepName
            });
            if (departments) {
                httpreplyStatus = 200;
                replyMessage = {
                    status: "Success",
                    Department: departments
                };
            }
            res.status(httpreplyStatus).json(replyMessage);
        }
        catch (e) {
            httpreplyStatus = 500;
            replyMessage = {
                status: "Fail",
                message: "GENERAL SERVER ERROR"
            };
            res.status(httpreplyStatus).json(replyMessage);
        }
    }
    static async deletDepartments(req, res) {
        let httpreplyStatus, replyMessage;
        try {
            const id = +req.body.id;
            const departments = await models_1.Department.destroy({
                where: { id }
            });
            if (departments) {
                httpreplyStatus = 200;
                replyMessage = {
                    status: "Success",
                    Department: departments
                };
            }
            res.status(httpreplyStatus).json(replyMessage);
        }
        catch (e) {
            httpreplyStatus = 500;
            replyMessage = {
                status: "Fail",
                message: "GENERAL SERVER ERROR"
            };
            res.status(httpreplyStatus).json(replyMessage);
        }
    }
}
exports.DepartmentController = DepartmentController;
