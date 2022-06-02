const router = require('express').Router();
const { CandyBox, Candies, Users, Subscription } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  CandyBox.findAll({ // be sure to include its  Category and Tag data
    include: [
      {
        model: Candies,
        attributes: ['id', 'candy_name'],
      },
      {
        model: Users,
        attributes: ['id', 'first_name'],
      }
    ]
  })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  CandyBox.findOne({
    where: {
      id: req.params.id
    },
      // be sure to include its associated Category and Tag data
      include: [
        {
          model: Candies,
          attributes: ['id', 'candy_name']
        },
        {
          model: Users,
          attributes: ['id', 'first_name']
        }
      ]
        })
        .then(dbProductData => {
          if (!dbProductData) {
            res.status(404).json({ message: 'No product found with this id' });
            return;
          }
          res.json(dbProductData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

// create new product
router.post('/', (req, res) => {
  CandyBox.create({
    decade: req.body.decade,
    price: req.body.price,
    stock: req.body.stock,
  })
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.usersIds.length) {
        const subscriptionIdArr = req.body.usersIds.map((users_id) => {
          return {
            candybox_id: product.id,
            users_id,
          };
        });
        return Subscription.bulkCreate(subscriptionIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  CandyBox.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return Subscription.findAll({ where: { subscription_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const subscriptionIds = productTags.map(({ users_id }) => users_id);
      // create filtered list of new tag_ids
      const newsubscription = req.body.usersIds
        .filter((users_id) => !subscriptionIds.includes(users_id))
        .map((users_id) => {
          return {
            subscription_id: req.params.id,
            users_id,
          };
        });
      // figure out which ones to remove
      const subscriptionToRemove = productTags
        .filter(({ users_id }) => !req.body.usersIds.includes(users_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        Subscription.destroy({ where: { id: subscriptionToRemove } }),
        Subscription.bulkCreate(newsubscription),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  CandyBox.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
