import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      return response.status(200).json("Conversation already exists");
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    return response.status(200).json("Conversation saved Successfully");
  } catch (error) {
    return response
      .status(500)
      .json(`Error while conversation saving : ${error}`);
  }
};

export const getConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;

    const conversation = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });
    return response.status(200).json(conversation);
  } catch (error) {
    return response
      .status(500)
      .json(`Error while conversation getting : ${error}`);
  }
};
