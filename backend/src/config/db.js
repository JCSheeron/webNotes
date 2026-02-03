import mongoose from "mongoose";

export async function connectDb() {
  const connStrEnv = process.env.MONGO_URI;
  const portEnv = process.env.DB_PORT || 5001;
  try {
    // Use '127.0.0.1' instead of 'localhost' in Node.js 18+ for compatibility.
    // Connect using env variable to hide u/n and password away
    // await mongoose.connect('mongodb://<username>:<password>@127.0.0.1:5002/noteboard?authSource=admin');
    await mongoose.connect(connStrEnv);
    console.log("Connected to MongoDB notebord db locally on port: ", portEnv);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the application if connection fails
  }
}
