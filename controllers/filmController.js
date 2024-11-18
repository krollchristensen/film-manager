// controllers/filmController.js
const Film = require('../models/film');

// Tilføjer en ny film
exports.createFilm = async (req, res) => {
    try {
        const newFilm = new Film({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });
        await newFilm.save();
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved tilføjelse af film:", err);
        res.status(500).send("Fejl ved tilføjelse af film.");
    }
};

// Henter alle film og viser dem
exports.getAllFilms = async (req, res) => {
    try {
        const films = await Film.find();
        res.render('index', { films });
    } catch (err) {
        console.error("Fejl ved hentning af film:", err);
        res.status(500).send("Fejl ved hentning af film.");
    }
};

// Opdaterer en film
exports.updateFilm = async (req, res) => {
    try {
        await Film.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved opdatering af film:", err);
        res.status(500).send("Fejl ved opdatering af film.");
    }
};
// Henter en specifik film baseret på ID
exports.getFilmById = async (id) => {
    try {
        return await Film.findById(id);
    } catch (err) {
        console.error("Fejl ved hentning af specifik film:", err);
        throw err;
    }
};
// Sletter en film
exports.deleteFilm = async (req, res) => {
    try {
        await Film.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved sletning af film:", err);
        res.status(500).send("Fejl ved sletning af film.");
    }
};
