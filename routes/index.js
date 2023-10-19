const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

const Film = require("../models/Movie.model");

router.get("/movies", async (req, res, next) => {
  try {
    const filmsList = await Film.find();
    // console.log(filmsList);
    res.render("movies", { filmsList });
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const { id: movieId } = req.params;

    const film = await Film.findById(movieId);

    console.log(film);

    res.render("movie", { film });
  } catch (error) {
    next(error);
  }
});

router.get("/home", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
