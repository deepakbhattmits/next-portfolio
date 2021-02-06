/** @format */

import Link from 'next/link';
import { routes } from '../constants';
const NavBar = () => {
	return (
		<header>
			{Object.entries(routes).map((el, index) => (
				<Link key={index} href={el[0]}>
					{el[1]}
				</Link>
			))}
		</header>
	);
};
export default NavBar;
