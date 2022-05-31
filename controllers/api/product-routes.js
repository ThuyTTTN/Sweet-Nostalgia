// Added product-routes

const router = require("express").Router();
const { User, Candy, Product } = require("../../models");

// get all products
router.get("/", (req, res) => {
    // find all products
    Product.findAll({
      include: [
        User,
        Candy
      ],
    }).then((products) => res.json(products));
  });

  module.exports = router;