const User = require("../models/User");
const jwt = require('jsonwebtoken');


exports.createUser = async (req, res) => {
    try {
        let user;
        user = new User(req.body);
        await user.save();
        res.send(user);
    } catch ( error ) {
        res.status(500).send( error );
    }
}

exports.signup = async (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}, (err, user) => {
        if (err) {
            res.status(500).send('Error on authentication, review your data1');
        } else if(!user) {
            res.status(500).send('User does not exist'); 
        } else {
            user.isCorrectPassword(password, (err, result) => {
                if (err) {
                     res.status(500).send('Error on authentication, review your data2');
                } else if(result) {
                     jwt.sign({ user }, 'secretKey', {expiresIn: '32s'}, (err, token) => {
                        if(err) {
                         res.sendStatus(403);
                        }
                        res.json({ 
                            token,
                            user: {
                                _id: user._id,
                                username: user.name,
                                email: user.email,
                            }
                        })
                    });
                } else {
                    res.status(500).send('wrong user or password');
                }
            });
        }
    } )
}

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch ( error ) {
        res.status(500).send( error );
    }
};

exports.getUserById = async (id, res) => {
    try {
        const user = await User.findOne({ _id : ObjectId(id) });
        res.json(user);
    } catch ( error ) {
        res.status(500).send( error );
    }
};