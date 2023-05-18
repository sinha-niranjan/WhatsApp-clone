import { Dialog, Box, styled } from "@mui/material";

import React, { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

// Components
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";

const dialogstyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  minWidth: "800px",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "0",
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 83%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  return (
    <div>
      <Dialog
        open={true}
        PaperProps={{ sx: dialogstyle }}
        hideBackdrop={true}
        maxWidth={"md"}
      >
        <Component>
          <LeftComponent>
            <Menu />
          </LeftComponent>
          <RightComponent>
            {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
          </RightComponent>
        </Component>
      </Dialog>
    </div>
  );
};

export default ChatDialog;
