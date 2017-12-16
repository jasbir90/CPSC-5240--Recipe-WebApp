import Mongoose = require("mongoose");

interface IJobModel extends Mongoose.Document {
   jobID: number;
   jobName: string;
   restaurantName: string,
   jobDescription: string,
}
export default IJobModel;