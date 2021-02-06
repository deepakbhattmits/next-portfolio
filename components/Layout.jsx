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
		</div>
	);
};
export default Layout;
