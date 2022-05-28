// Modules to require
const router = require('express').Router();
const { Candy, User } = require('../../models');
const withAuth = require('../../utils/auth'); 


// GET request to find all candies
router.get('/', (req, res) => {
    // access the Candy model and find all candies
    Candy.findAll({ 
        // include the user that subscribed to the candy
        include: [
            {
                // the model is the table we want to include
                model: User,
                // the atribbutes are the columns we want to return for the user that subscribed to the candy
                attributes: ['id', 'email', 'password']
            }
        ]
    })
    // send the response back to the client
    .then(dbCandyData => res.json(dbCandyData)) 
    // catch any errors
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// single GET request
router.get('/:id', (req, res) => {

    Candy.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'category_decade',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'email', 'password']
            }
        ]
    })
    .then(dbCandyData => {
        if (!dbCandyData) {
            res.status(404).json({ message: 'No data found with this id' });
            return;
        }
        res.json(dbCandyData);
    })
    .catch(err => res.status(500).json(err));
});


// // POST reqeust
// router.post('/', withAuth, (req, res) => {
//     Candy.create({
//         category_decade: req.body.category_decade,
//         created_at: req.body.created_at
//     })
//     .then(dbUserData => {
//         res.json(dbUserData)})
//     .catch(err => res.status(500).json(err));
// });


// PUT request
router.put('/:id', withAuth, (req, res) => {
    Candy.update(
        {
            category_decade: req.body.category_decade
        },
        {
            where: {
            id: req.params.id
            }
        }
    )
    .then(dbCandyData => {
        if (!dbCandyData) {
            res.status(404).json({ message: 'No data found with this id' });
            return;
        }
         res.json(dbCandyData);
    })
    .catch(err => res.status(500).json(err));
});


//DELETE request
router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Candy.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCandyData => {
        if (!dbCandyData) {
            res.status(404).json({ message: 'No data found with this id' });
            return;
        }

        res.json(dbCandyData);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;