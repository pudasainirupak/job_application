const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobRoute');
const applicationRoutes = require('./routes/applicationRoute');
const { handleErrors } = require('./middlewares/validationMiddleware');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

//API Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// For error handling middleware
app.use(handleErrors);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));