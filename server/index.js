require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const connectDB = require('./config/db');
const importRoutes = require('./routes/importRoutes');
const connectDB = require('./config/db');

// DB connection
// connectDB();
connectDB()


const app = express();
app.use(express.json());


app.use(cors());

// Routes
app.use('/api/imports', importRoutes);
// const importRoutes = require('./routes/importRoutes');
// app.use('/api/imports', importRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
