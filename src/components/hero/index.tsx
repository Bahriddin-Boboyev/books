import { centerBetween } from '@/styles';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Title, TitleInsight, BtnStyle, HeroStyle } from './style';
import { Plus } from '@/assets';

export const Hero = () => {
    return (
        <Container component="section" sx={HeroStyle}>
            <Grid container spacing={2} mb="10px" sx={centerBetween}>
                <Grid item>
                    <Typography variant="h1" sx={Title}>
                        You’ve got&nbsp;
                        <Typography component="span" sx={TitleInsight}>
                            7 book
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item>
                    <Button sx={BtnStyle} startIcon={<Plus />}>
                        Create a book
                    </Button>
                </Grid>
            </Grid>
            <Typography variant="overline" sx={{ color: 'white.light', fontSize: '18px', textTransform: 'initial' }}>
                Your books today
            </Typography>
        </Container>
    );
};
