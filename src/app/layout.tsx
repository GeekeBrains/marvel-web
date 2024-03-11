'use client';

// import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import { AppProvider } from '@/components/context/app-provider';
import { Header } from '@/components/header/header';
import './globals.css';

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: '400' });

// export const metadata: Metadata = {
// 	title: 'Marvel Zara Challenge',
// 	description: "Let's explore the Marvel universe.",
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${robotoCondensed.className} antialised`}>
				<AppProvider>
					<Header />
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
