/** @format */

import Link from 'next/link';

const PostLink = ({ slug, title }) => (
	<li>
		<Link as={slug} href={`/post?title=${title}`}>
			{title}
		</Link>
	</li>
);
export default PostLink;
