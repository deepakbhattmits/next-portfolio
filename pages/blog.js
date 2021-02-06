/** @format */
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';
import { blogs } from '../constants';

const Blog = () => {
	return (
		<Layout title='Blog'>
			<ul>
				{blogs?.map((el, index) => (
					<PostLink slug={`${el}-Post`} title={el} key={index} />
				))}
			</ul>
		</Layout>
	);
};
export default Blog;
