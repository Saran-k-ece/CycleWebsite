const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/index');
app.use('/api', authRoutes);
app.use('/api/products', productRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://cycle:cycle123@cluster0.ngxdv.mongodb.net/Cycle', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
