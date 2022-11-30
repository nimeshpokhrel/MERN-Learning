const checkBodyData = (req, res, next) => {
  try {
    if (req.body?.username?.length > 0 && req.body?.password?.length > 0) {
      next();
    } else {
      throw new Error("Missing Username & Password");
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = { checkBodyData };
