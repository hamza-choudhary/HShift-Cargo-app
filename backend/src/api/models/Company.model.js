import mongoose from "mongoose";

const Schema = mongoose.Schema;

const companySchema = new Schema({
  owner: {
    //this is basically company_id
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service', // Reference to the Service model
    },
  ],
  approve:{
    type:String,
    default:"PENDING"
  }
});

const Company = mongoose.model("Company", companySchema);

export default Company;
