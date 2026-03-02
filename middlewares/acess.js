export async function checkAcessToCart(req, res, next) {
  if (!req.session || !req.session.data) {
    return next(); // Let it pass, the controller will handle the unauthenticated state
  }

  if (req.session.data.role === "admin") {
    return res.json({
      message: "you dont have cart you are admin",
    });
  }

  next();
}
