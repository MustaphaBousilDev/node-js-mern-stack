//desc Register new user 
//@route POST/api/users
//@access Public 
const registerUser=(req,res)=>{
    res.json({message:'fucking Register user'})
}

//desc Authenticate a user
//@route POST/api/users/login 
//@access Public 
const loginUser=(req,res)=>{
    res.json({message:'fucking login user'})
}


//desc Get user data
//@route GET/api/users/me
//@access Public 
const getMe=(req,res)=>{
    res.json({message:'fucking get user data'})
}


module.exports={registerUser,loginUser,getMe}