const express = require('express');
const router = express.Router();
const db = require('../db')

router.get('/', function(req, res, next)  {
    db.one(`
        select * from cd.facilities where facid=7;
        `).then( (result) => {
            res.render('facilities', { 
                facilities: result
        })
    })
})

module.exports = router;