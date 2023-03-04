import express, { Request, Response } from 'express';
import morgan from 'morgan';

const app = express();
const port = 8000;

app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Express is listening at http://localhost:${port}`);
});
