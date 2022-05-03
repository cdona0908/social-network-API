# Social-Network-API
 

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  
  ## Description

  The goal of this application is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. 
 

  ## Table of Contents
  
  - [Installation](#installation)
  - [Endpoints](#endpoints)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  

  ## Installation

  1. Git clone the repo down to your local.
  2. Run npm i to install the  dependencies
  3. Run npm start to run the server 
  
  ## Endpoints

    User Routes

    •	Get all users: GET /api/users
    •	Create user: POST /api/users
    •	Get user by Id: GET /api/users/:id
    •	Update user: PUT /api/users/:id
    •	Delete user: DELETE /api/users/:id
    •	Add friend: PUT /api/users/:userId/friends/:friendId
    •	Delete friend: DELETE /api/users/:userId/friends/:friendId

    Thought Routes

    •	Get all thoughts: GET /api/thoughts
    •	Create thought: POST /api/thoughts
    •	Get thought by ID: GET /api/thoughts/:id
    •	Update thought: PUT /api/thoughts/:id
    •	Delete thought: DELETE /api/thoughts/:id

    Reaction Routes

    •	Add a reaction: PUT /api/thoughts/:thoughtId/reactions
    •	Delete a reaction: DELETE /api/thoughts//:thoughtId/reactions/reactionId'


  ## Usage

  Use Insomnia or a similar app to test the REST API.

   
  Link to full video presentation: https://drive.google.com/file/d/1TQUFIeSiCuDl06gGxJqobMZoL3Zqj6k0/view

 
    
  ## License

  
  This project is licensed under MIT license. 

  ## Contributing
  
  If you like to contribute to this application, please refer to the following guidelines:

  Please refer to the Contributor Covenant v2.1 in the following  website: https://www.contributor-covenant.org for guidelines details on how to contribute


  ## Questions

  You can find me on Github: [cdona0908](https://github.com/cdona0908) <br>
  Any questions? Email me to : celiamdona@gmail.com