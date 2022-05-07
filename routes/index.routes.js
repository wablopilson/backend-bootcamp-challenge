const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("index");
});


//Eaters routes
router.use('/eaters', require('./eaters.routes'))

//Restaurants routes
router.use('/restaurants', require('./restaurants.routes'))

//Groups routes
router.use('/', require('./groups.routes'))


module.exports = router;
