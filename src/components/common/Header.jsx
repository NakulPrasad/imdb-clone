import React, { useState } from 'react'

import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import { logoURL } from '../../constants/constant';

//components
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)`
    background : #121212;
    min-height : 56px !important;
    padding : 0 99px !important;
    justify-content : space-between;
    & > * {
        padding : 0 16px;
    }
    & > div{
        display:flex;
        align-items: center;
        cursor: pointer;
        & > p {
            font-size: 14px;
            font-weight : 600;

        }
    }
    & > p {
        font-size: 14px;
        font-weight : 600;

    }
`
const InputSearchField = styled(InputBase)`
background : #FFFFFF;
height : 30px;
width : 55%;
border-radius : 5px;

`

const Logo = styled('img')({
    width: 64,
})

const Header = () => {
    //creating menu popup
    const [open, setOpen] = useState(null);
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(null);
    }

    return (
        <div>
            {/*mui appbar is fix; which breaks flow ; Banner gets hidden beside */}
            <AppBar position='static'>
                <StyledToolbar>
                    <Link to={'/'}>
                        <Logo src={logoURL} alt="" />

                    </Link>
                    <Box onClick={handleClick} >
                        <Menu />
                        <Typography>Menu </Typography>
                    </Box>
                    {/* sending prop named open */}
                    <HeaderMenu open={open} handleClose={handleClose} />
                    <InputSearchField />
                    <Typography>IMDb<Box component="span">Pro</Box> </Typography>
                    <Box>
                        <BookmarkAdd />
                        <Typography> WatchList</Typography>
                    </Box>
                    <Typography>Sign IN</Typography>
                    <Box>
                        <Typography>EN</Typography>
                        <ExpandMore />

                    </Box>

                </StyledToolbar>
            </AppBar>
        </div>
    )
}

export default Header