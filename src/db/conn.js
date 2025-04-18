const mongoose = require("mongoose");

// Use environment variable for MongoDB Atlas URI
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/User_Registration";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove deprecated options
})
.then(() => {
    console.log('MongoDB connection successful');
})
.catch((e) => {
    console.log('MongoDB connection error:', e.message);
});

module.exports = mongoose; // Export for use in other files
