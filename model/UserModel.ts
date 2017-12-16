import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IUserModel from '../interfaces/IUserModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class TaskModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                firstName: String,
                lastName: String,
                userId: Number,
                password: String,
                premiuimMembershipId: String,
                isPremium: Boolean
            }, {collection: 'users'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("User", this.schema);
    }
    
    public retrieveTasksDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }



}