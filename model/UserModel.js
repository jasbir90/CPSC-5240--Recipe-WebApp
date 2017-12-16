"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var TaskModel = (function () {
    function TaskModel() {
        this.createSchema();
        this.createModel();
    }
    TaskModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            firstName: String,
            lastName: String,
            userId: Number,
            password: String,
            premiuimMembershipId: String,
            isPremium: Boolean
        }, { collection: 'users' });
    };
    TaskModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("User", this.schema);
    };
    TaskModel.prototype.retrieveTasksDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return TaskModel;
}());
exports["default"] = TaskModel;
