import React from 'react';
import { Container, Grid, InputAdornment, IconButton, TextField } from '@mui/material';
import { Logo, Search, Notification } from '@/assets';
import { searchInputProp } from './style';
import Link from 'next/link';
import { NavbarMenu } from './NavbarMenu';

export const Navbar = () => {
    return (
        <header className=" py-4">
            <Container>
                <Grid container spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item>
                        <Grid container spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                            <Grid item>
                                <Link href="/">
                                    <Logo />
                                </Link>
                            </Grid>
                            <Grid item flex="1">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="search"
                                    name="search"
                                    placeholder="Search for any training you want"
                                    type="search"
                                    size="small"
                                    className="search-field"
                                    inputProps={searchInputProp}
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

                    <Grid item>
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
