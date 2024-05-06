'use client';

import { Box, Button, Container, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useTogglePassword } from '@/hooks';
import { usePathname } from 'next/navigation';
import { authValidationSchema } from '@/constants';

export const Auth = () => {
    const path = usePathname();
    const isSignUp = path === '/auth/signup';

    const [Icon, passwordType, visible, setVisibility] = useTogglePassword();
    const [ConfirmIcon, confirmPasswordType, confirmVisible, setConfirmVisibility] = useTogglePassword();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: authValidationSchema(isSignUp),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const inputLabel = {
        sx: {
            fontSize: '14px',
            '&.MuiOutlinedInput-notchedOutline': { fontSize: '15px' },
        },
    };

    const handleClickPassword = (isConfirmPassword: boolean) => {
        if (isConfirmPassword) {
            setConfirmVisibility(!confirmVisible);
        } else {
            setVisibility(!visible);
        }
    };

    return (
        <Container>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                    backgroundColor: 'white.light',
                    padding: '48px 28px',
                    maxWidth: '430px',
                    width: '100%',
                    boxShadow: '0 4px 32px 0 rgba(51, 51, 51, 0.04)',
                    borderRadius: '12px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{ color: 'dark.main', mb: '36px', fontWeight: '700', fontSize: '36px', textAlign: 'center' }}
                >
                    {isSignUp ? 'Sign up' : 'Sign in'}
                </Typography>
                <Grid container spacing={3} sx={{ flexDirection: 'column', mb: '30px' }}>
                    <Grid item>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="username"
                            name="username"
                            label="Username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            InputLabelProps={inputLabel}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="password"
                            name="password"
                            label="Password"
                            type={confirmPasswordType}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputLabelProps={inputLabel}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => handleClickPassword(true)}
                                            edge="end"
                                        >
                                            <ConfirmIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    {isSignUp && (
                        <Grid item>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm password"
                                type={passwordType}
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                InputLabelProps={inputLabel}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleClickPassword(false)}
                                                edge="end"
                                            >
                                                <Icon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    )}
                </Grid>
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{ bgcolor: 'purplish.blue', textTransform: 'capitalize', fontSize: '15px', mb: '12px' }}
                >
                    Submit
                </Button>

                <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'dark.primary' }}>
                    {isSignUp ? 'Already signed up?' : 'Already signed up?'} &nbsp;
                    <Link className="text-[#6200ee]" href={isSignUp ? '/auth/signin' : '/auth/signup'}>
                        {isSignUp ? 'Go to sign in' : 'Go to sign up'}
                    </Link>
                    .
                </Typography>
            </Box>
        </Container>
    );
};
