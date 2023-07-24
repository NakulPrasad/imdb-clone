import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { Menu, BookmarkAdd, ExpandMore } from "@mui/icons-material";
import { logoURL } from "../../constants/constant";
import useMediaQuery from "@mui/material/useMediaQuery";

//components
import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const mobile = useMediaQuery(" (max-width : 1080px) ");
  const StyledToolbar = styled(Toolbar)`
    background: #121212;

    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;
      cursor: pointer;
      & > p {
        font-size: 14px;
        font-weight: 600;
      }
    }
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  `;
  const InputSearchField = styled(InputBase)`
    background: #ffffff;
    height: 30px;
    width: 55%;
    border-radius: 5px;
  `;

  const Logo = styled("img")({
    width: 64,
  });

  //creating menu popup
  const [open, setOpen] = useState(null);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box>
      {/*mui appbar is fix; which breaks flow ; Banner gets hidden beside */}
      <AppBar position="static">
        <StyledToolbar
          sx={{
            padding: mobile ? "2vh 0" : "0 0",
            minHeight: "56px",
          }}
        >
          <Link to={"/"}>
            <Logo src={logoURL} alt="" />
          </Link>
          <Box onClick={handleClick}>
            <Menu />
            <Typography>Menu </Typography>
          </Box>
          {/* sending prop named open */}
          <HeaderMenu
            open={open}
            handleClose={handleClose}
            sx={{ display: mobile ? "none" : "block" }}
          />
          <InputSearchField sx={{ display: mobile ? "none" : "block" }} />
          <Typography sx={{ display: mobile ? "none" : "block" }}>
            IMDb<Box component="span">Pro</Box>{" "}
          </Typography>
          <Box>
            <BookmarkAdd />
            <Typography>WatchList</Typography>
          </Box>
          <Typography>Sign IN</Typography>
          <Box>
            <Typography>EN</Typography>
            <ExpandMore />
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
