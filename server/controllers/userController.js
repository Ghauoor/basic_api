const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("Name and Email is Required");
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      throw new Error("Email is Already Exist");
    }

    const user = await User.create({
      name,
      email,
    });

    res.status(200).json({
      success: true,
      message: "User created Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
