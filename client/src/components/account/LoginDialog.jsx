import React, { useContext } from "react";

// Image
import { qrCodeImage } from "../../constants/data";

import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

// Mui component
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

// Context
import { AccountContext } from "../../context/AccountProvider";

// Api
import { addUser } from "../../service/api";

const dialogstyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  minWidth: "800px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;
const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 20px;
    color: #525252;
  }
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "56px 10px 0 56px",
});

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };
  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };

  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>To use WhatsApp on Your Computer.</Title>
            <StyledList>
              <ListItem>1. Open WhatsApp on Your Phone</ListItem>
              <ListItem>
                2. Tap Menu : Setting ans select Linked Devices
              </ListItem>
              <ListItem>3. Tap on Link a Device</ListItem>
              <ListItem>
                4. Point your phone to this screen to capture the code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QRCode src={qrCodeImage} alt="" />
            <Box
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateX(50%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
