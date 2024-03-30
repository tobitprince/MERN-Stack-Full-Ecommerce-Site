const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');

// register user =? /api/v1/register
exports.registerUser = catchAsyncErrors ( async (req, res ,next) => {
    const { name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'dwedw',
            url: 'dwedwe'
        }
    })

    sendToken(user, 200, res)
})

//login user => /api/v1/login 

exports.loginUser = catchAsyncErrors ( async (req, res, next) => {
    const { email, password } = req.body;

    //checks if email and password have been entered
    if(!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    //finding the user in the database
    const user = await User.findOne({ email }).select('+password')
    if(!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    //check if password is correct or not
    const isPasswordMatched = await User.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res)

})
