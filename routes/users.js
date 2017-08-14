var express = require('express');
var router = express.Router();
const db = require('../db')

router.get('/:id', function(req, res, next)  {
  db.one(`
      select * from cd.members where memid=${req.params.id};
      `).then( (result) => {
          res.render('facilities', { 
              member: result
      })
  })
})


router.get('/', function(req, res, next)  {
    db.query(`
        select * from cd.members where memid != 0;
        `).then( (result) => {
            res.render('users', { 
                members: result
        })
    })
})



module.exports = router;
