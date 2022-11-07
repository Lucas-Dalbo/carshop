[Leia em Português!](./README-Eng.md)

# Carshop-DB Project
This project was developed for the back-end module at Trybe!

---
## About the project
This project goal was to build an API for Vehicles, using mongoDB with mongoose and TypeScript.
For API structure, it was used OOP following the SOLID principles.
The API was tested using mocha, sinon and chai, focusing on unit tests.

---
## Functionalists

#### Cars

| Type   | Route       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `POST` | `/cars` | Register a new car |
| `GET` | `/cars` | Show all cars |
| `GET` | `/cars/:id` | Show a car based on its id |
| `PUT` | `/cars/:id` | Edit car data based on its id |
| `DELETE` | `/cars/:id` | Delete a car based on its id |

#### Motorcycles

| Type   | Route       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `POST` | `/motorcycle` | Register a new motorcycle |
| `GET` | `/motorcycle` | Show all motorcycles |
| `GET` | `/motorcycle/:id` | Show a motorcycle based on its id |
| `PUT` | `/motorcycle/:id` | Edit motorcycle data based on its id |
| `DELETE` | `/motorcycle/:id` | Delete a motorcycle based on its id |

---
## What was used?
 - TypeScript;
 - Node.js with Express;
 - MongoDB with Mongoose;
 - ZOD Validations;
 - OOP and SOLID;
 - Mocha, sinon, chai;
 - ESlint.
