import localFont from 'next/font/local';

export const mulish = localFont({
    src: [
        {
            path: '../../public/fonts/mulish-v13-latin-300.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/mulish-v13-latin-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/mulish-v13-latin-500.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/mulish-v13-latin-600.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/mulish-v13-latin-700.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-mulish',
});

export const montserrat = localFont({
    src: [
        {
            path: '../../public/fonts/montserrat-v26-latin-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/montserrat-v26-latin-500.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/montserrat-v26-latin-600.woff2',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-montserrat',
});
