import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import jsend from 'jsend';
import api from './api';

const app = express();

dotenv.config();

app.use(cors());
app.use(morgan('dev'));
app.use(jsend.middleware);

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Survey APP  API.' });
});

app.use('/api/survey', api);

app.use((req, res, next) => {
	const error = new Error('Not found!');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: `Survey APP API says ${error.message}`
		}
	});
	next();
});

app.listen(process.env.SERVERPORT || 8009, function() {
	console.log(`Now listening for request at ${process.env.SERVERPORT}...`);
});

module.exports = app;
