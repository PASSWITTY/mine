const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const cors = require('cors');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Handle MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set up method-override for handling PUT and DELETE requests
app.use(methodOverride('_method'));

// Set up body-parser middleware for parsing JSON data
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Import routes
const skillsRoutes = require('./controllers/skillsController');
const projectsRoutes = require('./controllers/projectsController');

// Use routes
app.use('/skills', skillsRoutes);
app.use('/projects', projectsRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
