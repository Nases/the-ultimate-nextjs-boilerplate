module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    req.flash("errors", { msg: "Please login to view this resource" })
    res.redirect("/login")
  },
  forwardAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard')
    }
    return next()
  }
}
