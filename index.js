import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Import routes
import authRoutes from './routes/auth.routes.js';
import fileRoutes from './routes/file.routes.js';
import aiRoutes from './routes/ai.routes.js'
// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/ai', aiRoutes);

// --- Server Setup ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;