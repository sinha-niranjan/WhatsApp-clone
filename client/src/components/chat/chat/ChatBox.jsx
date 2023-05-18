import React, { useContext, useEffect, useState } from "react";

import { Box,styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";

import { getConversation } from "../../../service/api";

import ChatHeader from "./ChatHeader";
import Messages from "./Messages";



const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub,account.sub]);
  return (
    <Box >
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
