const mongoose = require('mongoose');

//create a schema
const userSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String,
        trim: true,
        
    },
    lastname: {
        required: true,
        type: String,
        trim: true,
        
    },
    username: {
        required: true,
        type: String,
        trim: true,
        unique: true,

    },
    email:{
        type: String,
        required:true,
        trim: true,
        unique: true,

    },
    contact: {
        required: true,
        type: String,
        trim: true,
        
    },
    hash_password:{
        type: String,
        required: true,
        min: 4,
        max: 25

    },
    role:{
        type: String,
        enum:['admin', 'user'],
        default:'user',

    }    

},
    {
        timestamps: true
    });
 
    //virtual fields
    userSchema.virtual('password')
    .set(function(password){
        this.hash_password = bcrypt.hashSync(password, 10);
        //10 is the strength of the password
    
    });
    //create a method that compares password and it will return either true or false

    userSchema.methods = {
        authenticate: function(password){
            return bcrypt.compareSync()(password, this.hash_password);
        }
    }

    
    
module.exports = mongoose.model('User', userSchema);