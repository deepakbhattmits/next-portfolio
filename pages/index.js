/** @format */
// import Link from 'next/link';
import { skills, socials } from '../constants';
// import styles from '../styles/HomePage.module.css';
import SideBar from '../components/SideBar';
import Main from '../components/Main';
import Error from './_error';
import DarkModeToggle from '../components/DarkModeToggle';
const Index = ({ user = {}, statusCode }) => {
	if (statusCode) {
		return <Error statusCode={statusCode} />;
	}
	return (
		<div className='ui grid'>
			<div className='sidebar'>
				<SideBar user={user} skills={skills} socials={socials} />
			</div>
			<div className='main'>
				<Main />
				<DarkModeToggle />
			</div>
			<style jsx>{`
				.grid {
					display: grid;
					margin: 5px;
					grid-template-columns: 20% 1fr;
					height: calc(100vh - 10px);
				}
				.sidebar {
					box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
					border-radius: 3px;
					padding: 15px;
					background: var(--color-background);
					color: var(--color-primary);
					margin: 0.5em;
				}
				.main {
					overflow-y: auto;
					overflow-x: hidden;
					padding: 0;
				}
				/* Track */
				.main::-webkit-scrollbar-track {
					background: #ccc;
				}

				/* Handle */
				.main::-webkit-scrollbar-thumb {
					background: #555;
					border-radius: 0;
				}

				/* Handle on hover */
				.main::-webkit-scrollbar-thumb:hover {
					background: #555;
				}
			`}</style>
		</div>
	);
};
Index.getInitialProps = async (ctx) => {
	const res = await fetch('https://api.github.com/users/deepakbhattmits');
	const statusCode = res.status > 200 ? res.status : false;
	const user = await res.json();
	return { user, statusCode };
};
export default Index;
