import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();


app.use(cors());
app.use(cookieParser())

// Middleware
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Routes Import 
const donor = require('./routes/donorRoutes')

app.use('/api/v1', donor)


app.get('/', (req, res) => {
  res.send('Welcome to the Blood Donation API');
});

export default app;
