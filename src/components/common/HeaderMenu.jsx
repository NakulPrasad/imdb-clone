import React from 'react'
import { Menu, MenuItem } from '@mui/material';

const HeaderMenu = ({ open, handleClose }) => {
    // const { open } = props; //destructing prop
    const openMenu = Boolean(open);
    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Popular</MenuItem>
                <MenuItem onClick={handleClose}>Top Rated</MenuItem>
                <MenuItem onClick={handleClose}>Upcoming</MenuItem>
            </Menu>
        </>
    )
}

export default HeaderMenu