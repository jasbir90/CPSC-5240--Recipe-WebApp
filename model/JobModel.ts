import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IJobModel from '../interfaces/IJobModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class JobModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                jobID: Number,
                jobName: String,
                restaurantName: String,
                jobDescription: String,
            }, {collection: 'jobs'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IJobModel>("jobs", this.schema);
    }
	
	public retrieveAllJobs(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    } 

	public retrieveJobDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
	// public retrieveRecipeDetailsByCategory(response:any, filter:Object) {
    //     var query = this.model.find(filter);
    //     query.exec( (err, itemArray) => {
    //         response.json(itemArray);
    //     });
    // }
 
}