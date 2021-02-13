/** @format */
import Head from 'next/head';
import NavBar from './NavBar';
const Layout = ({ children, title }) => {
	const url = '';
	return (
		<div className='root'>
			<Head>
				<title>NextPortfolio-{title}</title>
			</Head>
			<NavBar />
			<h1>{title}</h1>
			{children}
			<footer>&copy; {new Date().getFullYear()}</footer>
			<style jsx>{`
				.root {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
			`}</style>
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
		</div>
	);
};
export default Layout;
