const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const PasswordDataSchema = new Schema(
  {
    id: Number,
    userId: Number,
    name: String,
    url: String,
    password: String,
  },
  { timestamps: true }
);

const UserDataSchema = new Schema(
  {
    id: Number,
    username: String,
    password: String,
    email: String,
    frontName: String,
    lastName: String,
  }
)

// export the new Schema so we could modify it using Node.js
module.exports = {
  UserData: mongoose.model("UserData", UserDataSchema), 
  PasswordData: mongoose.model("PasswordData", PasswordDataSchema)
}