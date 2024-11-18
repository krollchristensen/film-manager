/*const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

// Route til visning af formularen for ny film
router.get('/new', (req, res) => {
    res.render('new');  // Render new.ejs
});
router.get('/', filmController.getAllFilms);
router.post('/film', filmController.createFilm);
router.post('/film/:id/update', filmController.updateFilm);
router.post('/film/:id/delete', filmController.deleteFilm);

module.exports = router;*/
const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

// Route til visning af formularen for ny film
router.get('/new', (req, res) => {
    res.render('new');  // Render new.ejs
});

// Route til visning af formularen for at opdatere en eksisterende film
router.get('/film/:id/edit', async (req, res) => {
    try {
        const film = await filmController.getFilmById(req.params.id);  // Kalder en ny metode i controlleren
        res.render('update', { film });
    } catch (err) {
        console.error("Fejl ved hentning af film til opdatering:", err);
        res.status(500).send("Fejl ved hentning af film.");
    }
});

router.get('/', filmController.getAllFilms);
router.post('/film', filmController.createFilm);
router.post('/film/:id/update', filmController.updateFilm);
router.post('/film/:id/delete', filmController.deleteFilm);

module.exports = router;

