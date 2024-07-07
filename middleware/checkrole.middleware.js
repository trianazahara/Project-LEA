function checkRole(role) {
  
    return function(req, res, next) {
      if (req.userRole === role) {
        next(); 
      } else {
        res.redirect ('/notfound')
      }
    };
  }

  module.exports = checkRole;