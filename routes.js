// const express = require('express')
// const routes = express.Router()

// routes.get('/', (req, res) => {
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('SELECT * FROM books', (err, row)=>{
//             if(err) return res.send(err)

//             res.json(rows)
//         })
//     })
// })

// module.exports = routes

const express = require('express');
const routes = express.Router();
// Get
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(err); // Cambiado res.send(err) a res.status(500).send(err)

        conn.query('SELECT * FROM books', (err, rows) => { // Cambiado row a rows para reflejar pluralidad
            if (err) return res.status(500).send(err); // Cambiado res.send(err) a res.status(500).send(err)

            res.json(rows);
        });
    });
});

// Post
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {

        conn.query('INSERT INTO books set ?', [req.body], (err, rows) => { // Cambiado row a rows para reflejar pluralidad
            if (err) return res.status(500).send(err); // Cambiado res.send(err) a res.status(500).send(err)

            res.send('book added!');
        });
    });
});

// delete
routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {

        conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows) => { // Cambiado row a rows para reflejar pluralidad
            if (err) return res.status(500).send(err); // Cambiado res.send(err) a res.status(500).send(err)

            res.send('book excluded!');
        });
    });
});

//edit
routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {

        conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => { // Cambiado row a rows para reflejar pluralidad
            if (err) return res.status(500).send(err); // Cambiado res.send(err) a res.status(500).send(err)

            res.send('book update!');
        });
    });
});

module.exports = routes;

