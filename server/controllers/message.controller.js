import { Message } from "../models/message.model.js";
import { Conversation } from "../models/conversation.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import { User } from "../models/user.model.js";
import { populate } from "dotenv";

export const sendMessage = asyncHandler(async (req, res, next) => {
  const senderId = req.userid;
  const receiverId = req.params.receiverId;
  const message = req.body.message;

  if (!senderId || !receiverId || !message) {
    return next(new errorHandler("All fields are required", 400));
  }

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
      messages: [],
    });
  }
  const newMessage = await Message.create({
    senderId,
    receiverId,
    message,
  });
  if (newMessage) {
    conversation.messages.push(newMessage._id);
    await conversation.save();
  }

  res.status(200).json({
    success: true,
    responseData: {
      message: "message sent successfully",
      data: newMessage,
    },
  });
});


export const getMessages = asyncHandler(async (req, res, next) => {
  const myId = req.userid;
  const participantId = req.params.participantId;

  if (!myId || !participantId) {
    return next(new errorHandler("All fields are required", 400));
  }

  let conversation = await Conversation.find({
    participants: { $all: [myId, participantId] },
  }).populate("messages", "message");

  console.log("conversation :", conversation);

  res.status(200).json({
    success: true,
    responseData: conversation,
  });
});
