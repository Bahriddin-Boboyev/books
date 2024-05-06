import React from 'react';
import { Container, Grid, InputAdornment, IconButton, TextField } from '@mui/material';
import { Logo, Search, Notification } from '@/assets';
import Link from 'next/link';
import { NavbarMenu } from './NavbarMenu';

export const Navbar = () => {
    return (
        <header className=" py-4">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Link href="/">
                                    <Logo />
                                </Link>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="search"
                                    name="search"
                                    placeholder="Search for any training you want"
                                    type="search"
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

                        <NavbarMenu />
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};
