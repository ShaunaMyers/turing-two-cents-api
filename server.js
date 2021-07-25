const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();
app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3001);
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://yjuallbecyquuz:ae9683fc25ec009cd257b0d1bcd71ba9efb41622fa4bd4e229336e67bd88105d@ec2-52-45-183-77.compute-1.amazonaws.com:5432/d89ngl6v155i5a',
  ssl: true
})

app.get('/', (req, res) => {
  pool.query('SELECT * FROM turingtwocents', (err, response) => {
    console.log(err, response)
    res.status(200).send({rows: response.rows})
  })
})



app.locals.title = 'Turing Two Cents API';



app.listen(app.get('port'), () => {console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)});
