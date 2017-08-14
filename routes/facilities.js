const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next)  {
    res.render('facilities', { 
        facilitiy: 'Tennis Court 1',
        when: "3pm-4pm",
        who: "Aaron Sosa"
    })
})

module.exports = router;