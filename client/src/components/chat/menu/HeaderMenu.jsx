import React, { useState } from "react";

import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  background-color: #f0f2f5;
  color: #4a4a4a;
`;

const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleProfileClick = () => {
    setOpenDrawer(true);
    setOpen(null);
  };

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keyMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuOption onClick={handleProfileClick}>Profile</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
