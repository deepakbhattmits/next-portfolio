/** @format */

import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='viewport-fit=cover' />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
