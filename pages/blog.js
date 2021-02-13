/** @format */
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';
import { blogs } from '../constants';

const Blog = () => {
	return (
		<Layout title='Blog'>
			<section className='blog-section'>
				{blogs?.map((el, index) => (
					<PostLink slug={`${el}-Post`} title={el} key={index} />
				))}
			</section>
			<style jsx>{`
				.blog-section {
					width: 100%;
					display: grid;
					grid-gap: 10px;
					grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
					align-items: center;
					justify-items: center;
				}
			`}</style>
		</Layout>
	);
};
export default Blog;
