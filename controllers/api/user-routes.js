// file connects to api/index.js
const router = require('express').Router();
const { User, Candy } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] } 
    })
    .then(dbUserData => res.json(dbUserData)) 
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });    
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
              model: Candy,
              attributes: ['id', 'category_decade']
            }
        ]
    })
    .then(dbUserData => {

        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,        
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode
    })
    .then(dbUserData => {

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.password = dbUserData.password;
            req.session.loggedIn = true;
        
            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



// LOGIN USER /api/users/login HERE...
router.post('/login',(req,res)=>{
    User.findOne({
        where:{
          email: req.body.email
        }
    })
    .then(dbLoginData =>{
        if(!dbLoginData || !dbLoginData.password){
            res.status(404).json({message: 'Login Failed'});
            return;
        }
        
        const correctPass = User.checkPassword(req.body.password);

        if(!correctPass){
            res.status(400).json({message: 'Invalid Password'});
            return;
        }
        req.session.save(()=>{
            req.session.email = User.email,
            res.session.loggedIn = true;
            res.json({User, message:'You are now logged in!'})
        });
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err)
    });

});




// LOGOUT USER /api/users/logout HERE...
router.post('/logout',(req,res)=>{
    if(req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).end();
        });
    }else{
        res.status(404).end();
    }
})




// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;