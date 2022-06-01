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
                attributes: ['id', 'email', 'first_name', 'last_name',]
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
//  access the candel model to find a single candy
    Candy.findOne({
        // find the candy with the id in the url
        where: {
            id: req.params.id
        },
        // the attributes are the columns we want to return
        attributes: [
            'candy_id',
        ],
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
    .then(dbCandyData => {
        // if there is no candy with the id  we send a 404 status
        if (!dbCandyData) { 
            res.status(404).json({ message: 'No data found with this id' });
            return;
        }
        // if there is a candy with the id we send the candy back to the client
        res.json(dbCandyData);
    })
    // catch any errors
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// POST reqeust
router.post('/', withAuth, (req, res) => {
    Candy.create({
       candy_70s: req.body.candy_70s,
        candy_80s: req.body.candy_80s, 
        candy_90s: req.body.candy_90s,  
    })
    .then(dbUserData => {
        res.json(dbUserData)})
    .catch(err => res.status(500).json(err));
});


// PUT request
router.put('/:id', withAuth, (req, res) => {
    // access the candy model to find a single candy
    Candy.update(
        {
            // the category_decade is the column we want to update

            candy_id: req.body.candy_id

        },
        // {
        //     // the where clause is the id of the candy we want to update
        //     where: {
        //     id: req.params.id
        //     }
        // }
    )
    // send the response back to the client
    .then(dbCandyData => {
        // if there is no candy with the id we send a 404 status
        if (!dbCandyData) {
            res.status(404).json({ message: 'No data found with this id' });
            return;
        }
        // if there is a candy with the id we send the candy back to the client
         res.json(dbCandyData);
    })
    // catch any errors
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


//DELETE request
router.delete('/:id', withAuth, (req, res) => {
    // access the candy model to find a single candy
    Candy.destroy({
        // the where clause is the id of the candy we want to delete
        where: {
            id: req.params.id
        }
    })
    // send the response back to the client
    .then(dbCandyData => {
        // if there is no candy with the id we send a 404 status
        if (!dbCandyData) {
            res.status(404).json({ message: 'No data found with this id' });
            return;
        }
        // if there is a candy with the id we send the candy back to the client
        res.json(dbCandyData);
    })
    // catch any errors
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;