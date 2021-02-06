/** @format */

import Layout from '../components/Layout';

const Error = ({ statusCode, message }) => {
	return (
		<Layout title='Error!!'>
			{statusCode
				? `Could not load user data : Status code ${statusCode}`
				: `Couldn't get that page, Sorry!`}
		</Layout>
	);
};
export default Error;
