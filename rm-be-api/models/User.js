const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema(
    {
        uid: {
            type: Number,
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        token: {
            type: String,
        },
        session: {
            type: String,
            default: Date.now()
        },
        created: {
            type: String,
            default: Date.now()
        }
    }
);

UserSchema.pre('save', function(next) {
    if(this.isNew || this.isModified('password')) {
        const document = this;
         bcrypt.hash(document.password, 10, function(error, hashedPassword) {
            if ( error )  {
                next(error);
            }else {
                document.password = hashedPassword;
                next();
            }
             
        })
    } else {
        next();
    }
});


UserSchema.methods.isCorrectPassword = function (password, callback) {
     bcrypt.compare(password, this.password, function(err, same) {
        if ( err ) {  
           callback(err);
        } else {
           callback(err, same)
        }
    })  
}
module.exports = mongoose.model('User', UserSchema);
