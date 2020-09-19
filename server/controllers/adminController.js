const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWTSECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES_COOKIE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.isAdmin = async (req, res, next) => {
  if (req.cookies.jwt) {
    const admin = {
      username: process.env.LOGIN_USER,
      password: process.env.USERPASSWORD,
    };
    res.locals.user = admin;
    next();
  } else {
    next();
  }
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.json({
      message: "No Username or Password",
    });
  }

  if (password === process.env.USERPASSWORD) {
    const user = {
      id: "123",
      username: process.env.LOGIN_USER,
      password: process.env.USERPASSWORD,
    };

    createSendToken(user, 200, res);
  } else {
    res.status(404).json({
      status: "fail",
      message: "incorrect email or password",
    });
  }
};

exports.logout = (req, res, next) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ status: "success" });
};
