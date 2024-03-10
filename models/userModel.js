const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        linkedin: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
)
const User = mongoose.model('user', userSchema)
module.exports = User
