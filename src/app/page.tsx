import { Hero, Navbar } from '@/components';
import { Button, Container } from '@mui/material';

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
            </main>
        </>
    );
}
