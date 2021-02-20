/** @format */

import Layout from '../components/Layout';
import Custom404 from './404';

const Error = ({ statusCode, message }) => {
	return (
		// <Layout title='Error!!'>
		// 	{statusCode
		// 		? `Could not load user data : Status code ${statusCode}`
		// 		: `Couldn't get that page, Sorry!`}
		// </Layout>
		<Custom404 />
	);
};
export default Error;
