/** @format */
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';

const Post = () => {
	const router = useRouter();
	const title = router.query.title;
	return (
		<Layout title={title}>
			Skill
			<br />
			<br />
			<br />
			<br />
			<Link href='/blog'>Go Back</Link>
		</Layout>
	);
};
export default Post;
