/** @format */
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Post = () => {
	const router = useRouter();
	const title = router.query.title;
	return <Layout title={title}>Skill</Layout>;
};
export default Post;
