const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();
app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3001);


app.locals.title = 'Turing Two Cents API';

app.locals.advice = [
  {id: 1, title: 'Advice Box1', description: 'This is advice box1', upvotes: 13, date: '2021/07/24', mod: 1} ,
  {id: 2, title: 'How not to fail', description: 'Study hard buster', upvotes: 7, date: '2021/05/02', mod: 2} ,
  {id: 3, title: 'Instructor Hacks', description: 'Give them apples', upvotes: 5, date: '2020/12/01', mod: 3}
];

app.get('/', (req, res) => {
  const advice = app.locals.advice

  res.status(200).send({ advice })
})



app.listen(app.get('port'), () => {console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)});
