import React from "react";

import { emptyChatImage } from "../../../constants/data";

import LockIcon from "@mui/icons-material/Lock";

import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  background: #faf9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 200px;

`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const Footer = styled(Typography)`
  font-size: 14px;
  color: #667781;
  margin-top: 30%;
`;

const StyledLock = styled(LockIcon)`
font-size: 14px;
margin : 0 10px;`

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="image" />
        <Title>WhatsApp Web</Title>
        <SubTitle>
          Send and receive messages without keeping your phone online.
          <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </SubTitle>

        <Footer>
          <StyledLock />
           End-to-end encrypted
        </Footer>
      </Container>
    </Component>
  );
};

export default EmptyChat;
