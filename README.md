# Turing Tip Jar API

This API was built with Express with a PostgreSQL database for the project [Turing Tip Jar](https://github.com/ShaunaMyers/turing-two-cents).

The API is deployed on Heroku [https://turingtwocentapi.herokuapp.com/](https://turingtwocentapi.herokuapp.com/)

Fetches can be made directly from the link above or this repo can be installed and run locally 

## Badges 

<p style="text-align: center;"> 
    <img alt="JavaScript Badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" />
    <img alt="Express Badge" src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square" />
    <img alt="Express Badge" src="https://img.shields.io/badge/PostgreSQL-4169e1?logo=postgresql&logoColor=000&style=flat-square" />
</p>


## Features

- Allows clients to: 
  - fetch all tips from a PostgreSQL Database hosted on Heroku 
  - post a new tip
  - delete a tip
  - add a new rating or update an existing rating on a tip
  
## Installation

Clone the repository and install dependencies

```szh 
git clone git@github.com:ShaunaMyers/turing-two-cents-api.git
cd turing-two-cents-api
npm install 
```

## Deployment

To deploy, `cd` into the project folder and run

```zsh
npm start
``` 

Fetches can be made from the following endpoints: 

## Endpoints

| Purpose   | URL      | Verb   | Request Body | Sample Response |
| :-------- | :------- | :------- | :------------ | :------------ |
| Get all tips | / | GET |  N/A | `{"rows": [{"id": 1, "title": "Duck", "description": "When in doubt, keep your head down", "mod": 4, "rating": 2, "date": 1627391413078}]}` |
| Add a new tip | / | POST |  `{"title": <String>, "description": <String> , "mod": <Integer>, "rating": <Integer> "date": <Integer>}` | `{"title": <String>, "description": <String> , "mod": <Integer>, "rating": <Integer> "date": <Integer>}` |
| Delete a tip | / | DELETE | `{ "id": <Integer> }` | "Request successfully deleted." |
| Update a rating | / | PATCH | `{"id": <Integer>, "rating": <Integer>}` | |

## Authors

- [@Shauna Meyers](https://github.com/ShaunaMyers)  
- [@Taylor Galloway](https://github.com/tylrs)
- [@Steven Berg](https://github.com/saberg1)
