import express from 'express';
// import cors from 'cors';

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:4200',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));

const router = express.Router();

router.use(express.json());

router.get('/employee', (request, response) => {
  response.send([{ id: 1, name: 'John Smith' }, { id: 2, name: 'Stacy Jacksons' }]);
});

router.get('/employee/:id', (request, response) => {
  const requestedId = request.params.id;
  response.send({ id: requestedId, name: 'John Smith' });
});

router.post('/employee', (request, response) => {
  response.status(201).send(request.body);
});

router.delete('/employee/:id', (request, response) => {
  response.sendStatus(204);
});

app.use('/api', router);

app.listen(8000, () => {
  console.log('Server started!');
});
