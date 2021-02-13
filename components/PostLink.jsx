/** @format */

import Link from 'next/link';
import styles from '../styles/PostLink.module.css';

const PostLink = ({ slug, title }) => (
	<article className={styles.article}>
		<Link as={slug} href={`/post?title=${title}`}>
			{title}
		</Link>
	</article>
);
export default PostLink;
