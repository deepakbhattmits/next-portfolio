/** @format */

import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='viewport-fit=cover' />
				<title>App Portfolio</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
