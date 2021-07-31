const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();
app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3051);
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://yjuallbecyquuz:ae9683fc25ec009cd257b0d1bcd71ba9efb41622fa4bd4e229336e67bd88105d@ec2-52-45-183-77.compute-1.amazonaws.com:5432/d89ngl6v155i5a',
  ssl: { rejectUnauthorized: false }
})

app.get('/', (req, res) => {
  pool.query('SELECT * FROM turingtwocents', (err, response) => {
    console.log(err, response)
    err
    ? res.status(404).send('Database Error')
    : res.status(200).send({rows: response.rows})
  })
})

app.post('/', (req, res) => {
  const reqParams = ['title', 'description', 'mod', 'rating', 'date'];
  let error = false;
  reqParams.forEach((param, index) => {
    if (!req.body[param]) {
      res.status(422).send('Please send all required data');
      error = true;
    } else if (index === 4 && !error) {
      const { title, description, mod, rating, date } = req.body;
      pool.query(`INSERT INTO turingtwocents(title, description, mod, rating, date) VALUES ('${title}', '${description}', ${mod}, ${rating}, '${date}')`,
      (err, response) => {
        console.log(err, response)
        err 
        ? res.status(404).send('Database Error')
        : res.status(200).send({ title, description, mod, rating, date })
      })
    }
  })
})

app.delete('/', (req, res) => {
  const { id } = req.body
  pool.query(`DELETE FROM turingtwocents WHERE id = ${id}`, 
  (err, response) => {
    console.log(err, response)
    err 
    ? res.status(404).send('Database Error')
    : res.status(200).send('Request successfully deleted')
  })
})

app.patch('/', (req, res) => {
  const { rating, id } = req.body
  pool.query(`UPDATE turingtwocents SET rating =${rating} WHERE id=${id} RETURNING *`,
  (err, response) => {
    console.log(err, response)
    err 
    ? res.status(404).send('Database Error')
    : res.status(200).send('Rating successfully updated')
  })
})

app.locals.title = 'Turing Two Cents API';



app.listen(app.get('port'), () => {console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)});
