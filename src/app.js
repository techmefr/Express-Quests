require("dotenv").config();
const express = require("express");
const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");
const validateMovie = require("../middlewares/validateMovie");
const validateUser = require("../middlewares/validateUser");

const app = express();
app.use(express.json());

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUsersById);
app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.post("/api/users", validateUser, userControllers.postUsers);
app.put("/api/movies/:id", validateMovie, movieControllers.putMovie);
app.put("/api/users/:id", validateUser, userControllers.putUsers);

module.exports = app;
