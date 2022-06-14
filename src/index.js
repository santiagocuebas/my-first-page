
import express from "express";
import morgan from 'morgan';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// IndexRoutes
import indexRoutes from './routes/index.js';

// Initialize express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));

// Routes
app.use(indexRoutes);

// Static Files
app.use(express.static(join(__dirname, 'public')))

// Listener
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
