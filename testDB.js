const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/filmManager', { connectTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

