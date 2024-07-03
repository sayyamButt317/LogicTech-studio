
const mongoose = require('mongoose');
 const DB_NAME = require ("../Utils/constant");

const connectionDB = async () => {
  try {
     await mongoose.connect(
      `mongob+srv://${process.env.DB_USER}:${DB_NAME}`
    );
    console.log(
      `\n Connected to MongoDB! `
    );
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    process.exit(1);
  }
};

module.exports = connectionDB;

