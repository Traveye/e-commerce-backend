# E-Commerce-Backend

### Table of Contents
* [Goals](#goals)
* [Implementation](#implementation)
* [Credits](#credits)
* [Usage](#usage)
* [License](#licene)

## Goals
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies.

- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete data in my database.

## Implementation
I began by setting up a `.env` file so that the local host user and password were obfuscated. The main purpose of this project was to demonstrate the execution of the CRUD operations using Insomnia. I built out the models and associations for the tables Category, Product, Product Tag, and Tag. Then, I added the necessary routes to retreive, add, update, and delete information from each table. 

![a gif of the app in insomnia](/assets/crud.gif)

You can watch a full demo of the app [here](https://drive.google.com/file/d/1ykeXTFsXQbq43xrsItj1NcIwNB6gPTMX/view) and you can check out the repo [here](https://github.com/Traveye/e-commerce-backend).

## Credits
A large portion of this code was provided as part of the project. My contributions were mainly to the creation of the models and associated routes. 

## Usage
N/A

## License
MIT