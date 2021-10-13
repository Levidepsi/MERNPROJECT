import mongoose from 'mongoose'
import assert from 'assert'
import bcrypt from 'bcryptjs'


const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: 0
    }
}, {
    timestamps: true,
})


userModel.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userModel.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password, salt)

})

const User = mongoose.model('User', userModel)


export default User