const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms | :post',
  ),
);

morgan.token('post', (request, response) => {
  return JSON.stringify(request.body);
});

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  return maxId + 1;
};

app.get('/api/all', (request, response) => {
  response.json(persons);
});

app.get('/info', (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</><br> ${new Date()}`,
  );
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const entry = persons.find((entry) => entry.id === id);
  if (entry) {
    response.json(entry);
  } else {
    response.status(404).end();
  }
});

app.post('/api/persons', (request, response) => {
  const body = request.body;

  const findPerson = persons.find(
    (person) => person.name.toLowerCase() === body.name.toLowerCase(),
  );

  if (!body.name || !body.phone) {
    return response
      .status(400)
      .json({ error: 'The name or number is missing' });
  } else if (findPerson) {
    return response.status(400).json({ error: 'name already in use' });
  }

  const person = {
    id: generateId(),
    name: body.name,
    phone: body.phone,
  };

  persons = persons.concat(person);

  response.json(person);
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((entry) => entry.id !== id);

  response.status(204).end();
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
