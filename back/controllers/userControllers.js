const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;
  try {
    if (!name || !email || !password) return res.status(400).json("Please fill all fields");

    const userExists = await User.findOne({ email });
    if (userExists)  return res.status(400).json("User already exists");

    const newUser = await User.create({
      name,
      email,
      password,
      pic,
    });
    console.log(`User created!! ${newUser}`); 
    const responseData = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      pic: newUser.pic,
      token: generateToken(newUser._id),
    };
    return res.status(201).json(responseData);
  } 
  catch (error) {
    console.error(error);
    return res.status(500).json("User not created, something went wrong!");
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Request body:", req.body);

    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (user && (await user.matchPassword(password))) {
      const responseData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        pic: user.pic,
        token: generateToken(user._id),
      };

      console.log("Authentication successful!");
      return res.status(201).json(responseData);
    }

    console.log("Authentication failed: Invalid Email or password!");
    return res.status(401).json("Invalid Email or password!");
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json("Authentication failed, something went wrong!");
  }
};

module.exports = {registerUser , authUser};
