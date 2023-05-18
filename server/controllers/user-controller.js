import User from "../model/user.js";

export const addUser = async (request, response) => {
  try {
    let exist = await User.findOne({ sub: request.body.sub });

    if (exist) {
      return response.status(200).json({
        msg: "user already exist",
      });
    }

    const newUser = new User(request.body);
    await newUser.save();
    response.status(200).json(newUser);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};


