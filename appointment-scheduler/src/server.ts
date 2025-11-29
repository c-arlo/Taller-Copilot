import express from 'express';
import mongoose from 'mongoose';
import setRoutes from './api/routes/index';
import config from './config/index';

const app = express();
const PORT = config.port || 3000;

// Middleware
app.use(express.json());

// Database connection
const databaseUrl = `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}`;
mongoose.connect(databaseUrl)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

// Set up routes
setRoutes(app, express.request, express.response);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});