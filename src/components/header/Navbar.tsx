'use client';

import React from 'react';
import { Container, Grid, InputAdornment, IconButton, TextField, Menu, MenuItem, Fade } from '@mui/material';
import { Logo, Search, Notification, UserAvatar } from '@/assets';
import '../../styles/globals.css';

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className=" py-4">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Logo />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="search"
                                    name="search"
                                    placeholder="Search for any training you want"
                                    type="text"
                                    size="small"
                                    className="search-field"
                                    inputProps={{
                                        style: { color: 'white', fontSize: '14px' },
                                        sx: {
                                            '&::placeholder': {
                                                color: '#fefefe',
                                                opacity: 0.64,
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton
                                                    // onClick={() => handleClickPassword(true)}
                                                    edge="start"
                                                >
                                                    <Search />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ flex: 1 }}></Grid>
                    <Grid item xs={2}>
                        <IconButton aria-label="notification">
                            <Notification />
                        </IconButton>
                        <IconButton
                            aria-label="notification"
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <UserAvatar />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};
