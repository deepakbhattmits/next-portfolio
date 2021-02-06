/** @format */

import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<html lang='en'>
				<Head>
					<meta name='description' content='a site for my programming' />
					<meta charSet='utf-8' />
					<meta name='robots' content='noindex, nofollow' />
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Roboto'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<style global jsx>{`
					body {
						font-family: 'Roboto', sans-serif;
					}
					header {
						width: 100%;
						display: flex;
						justify-content: space-around;
						padding: 1em;
						font-size: 1.2rem;
						background: indigo;
					}
					header a {
						color: darkgrey;
						text-decoration: none;
					}
					header a:hover {
						font-weight: bold;
						color: lightgrey;
					}
					footer {
						padding: 1em;
					}
				`}</style>
			</html>
		);
	}
}
export default MyDocument;
