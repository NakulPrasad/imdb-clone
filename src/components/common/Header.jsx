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
  const mobile = useMediaQuery(" (max-width : 480px) ");
  const StyledToolbar = styled(Toolbar)`
    background: #121212;

    justify-content: space-between;
    & > * {
      padding: 0 16px;
    }
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
    <div>
      {/*mui appbar is fix; which breaks flow ; Banner gets hidden beside */}
      <AppBar position="static">
        <StyledToolbar
          sx={{
            padding: mobile ? "0 0" : "0 96px",
            minHeight: mobile ? "35px" : "56px",
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
            <BookmarkAdd sx={{ display: mobile ? "none" : "block" }} />
            <Typography sx={{ display: mobile ? "none" : "block" }}>
              WatchList
            </Typography>
          </Box>
          <Typography sx={{ display: mobile ? "none" : "block" }}>
            Sign IN
          </Typography>
          <Box>
            <Typography sx={{ display: mobile ? "none" : "block" }}>
              EN
            </Typography>
            <ExpandMore sx={{ display: mobile ? "none" : "block" }} />
          </Box>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Header;
