/** @format */
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/Layout';
import Error from './_error';
Router.onRouteChangeStart = (url) => {
	console.log(url);
	NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
const About = ({ user = {}, statusCode }) => {
	if (statusCode) {
		return <Error statusCode={statusCode} />;
	}
	return (
		<Layout title='About'>
			<img src={user.avatar_url} alt={user.name} height='100' width='100' />
			<p>{user.name}</p>
		</Layout>
	);
};
// export const getStaticProps = async () => {
// 	const res = await fetch('https://api.github.com/users/deepakbhattmits');
// 	const user = await res.json();
// 	return {
// 		props: {
// 			user,
// 		},
// 	};
// };
About.getInitialProps = async (ctx) => {
	const res = await fetch('https://api.github.com/users/deepakbhattmits');
	const statusCode = res.status > 200 ? res.status : false;
	const user = await res.json();
	return { user, statusCode };
};
export default About;
