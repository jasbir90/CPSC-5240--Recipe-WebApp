"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var JobModel = (function () {
    function JobModel() {
        this.createSchema();
        this.createModel();
    }
    JobModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            jobID: Number,
            jobName: String,
            restaurantName: String,
            jobDescription: String
        }, { collection: 'jobs' });
    };
    JobModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("jobs", this.schema);
    };
    JobModel.prototype.retrieveAllJobs = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    JobModel.prototype.retrieveJobDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return JobModel;
}());
exports["default"] = JobModel;
