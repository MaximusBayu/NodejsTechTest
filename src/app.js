require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const checklistRoutes = require('./routes/checklistRoutes');
const itemRoutes = require('./routes/itemRoutes');
const app = express();

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/checklist', checklistRoutes);
app.use('/api/checklist', itemRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on  http://localhost:${PORT}`));