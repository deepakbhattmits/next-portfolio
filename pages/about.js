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
			{/* <p>{user.name}</p> */}
			<p className='description'>
				So I'm Deepak Bhatt, I am living in India. Hobbyist in general, I'm just
				always curious. I'd like to think I'm a solid web developer, but I know
				I have much to learn, and I make it a mission to learn something new
				every day. I hope I get the chance to grow withyou!
			</p>
			<style jsx>{`
				img {
					margin-top: 10px;
				}
				.description {
					width: 80%;
				}
			`}</style>
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
