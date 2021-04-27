const jwt = require('jsonwebtoken');

module.exports = async function(req, res, next) {
        const cookie = req.cookies['jwt'];
        const claims = jwt.verify(cookie, process.env.JWT_KEY);
    if(!claims){
        return res.status(401).send( {
            message: "Unauthorized access..."
        })
    }
    //const user = await User.findOne( {_id: claims._id});
    //const {password, ...data} = await user.toJSON();
    next(); 


    
}



