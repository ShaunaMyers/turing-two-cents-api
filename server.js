const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Turing Two Cents API';



app.listen(app.get('port'), () => {console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)});
