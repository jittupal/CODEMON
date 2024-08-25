const adminMiddleware = async (req, res, next) => {
  try {
    // console.log(req.user);
    const adminRole = req.user.isAdmin;
    if(!adminRole){
        return res.json({message: "Acess Denied for non admin people"})
    }
    // res.json({message: req.user.isAdmin});
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = adminMiddleware;