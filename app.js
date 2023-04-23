const express = require('express');
const blogRouter = require('./routes/blogRoutes');

const app = express();

//Routes
app.use('/api/v1/blogs', blogRouter);

module.exports = app;
