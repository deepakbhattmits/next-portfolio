/** @format */

import Link from 'next/link';
import Error from '../pages/_error';

const Card = ({ repos }) => {
	return (
		<>
			<div className='ui cards'>
				{repos.map(({ appName, repoUrl, webUrl, stacks, description }, i) => (
					<div className='card' key={i}>
						<div className='content'>
							<div className='header'>
								{appName} <i className='rocket green icon'></i>
							</div>
							<div className='meta'>{stacks.join(',')}</div>
							<div className='description'>{description}</div>
						</div>
						<div className='action extra'>
							<Link href={!!repoUrl ? repoUrl : '/_error'}>
								<a
									target='_blank'
									rel='noopener noreferer'
									className='ui button'>
									Repo
								</a>
							</Link>
							<Link href={!!webUrl ? webUrl : '/_error'}>
								<a
									target='_blank'
									rel='noopener noreferer'
									className='ui button'>
									Demo
								</a>
							</Link>
						</div>
					</div>
				))}
			</div>
			<style jsx>{`
				/** @format */
				.ui.cards {
					margin: 0;
				}
				.ui.cards > .card > .extra.action {
					display: flex;
					justify-content: space-between;
				}
				.ui.cards > .card > .extra.action .ui.button {
					background: var(--color-btn-background);
					color: var(--color-background);
					border: 2px solid var(--color-btn-background);
					width: 80px;
					border-radius: 50px;
					padding: 0.5em;
				}
				.ui.cards > .card > .extra.action .ui.button:hover {
					background: var(--color-background);
					color: var(--color-btn-background);
					border: 2px solidvar(--color-btn-background);
				}
				.ui.cards > .card > .content > .header {
					color: var(--color-primary);
				}
				.ui.cards > .card > .content > .description {
					color: var(--color-description);
				}
				.ui.cards > .card > .content > .meta {
					color: var(--color-meta);
				}
				.ui.cards > .card {
					background: var(--color-background);
					color: var(--color-primary);
					margin: 0.5em;
				}
				.card:hover {
					transform: scale(1.05);
					z-index: 1;
					/*box-shadow: rgb(0 0 0 / 12%) 0px 30px 60px;*/
					transition: 0.4s;
				}
			`}</style>
		</>
	);
};
export default Card;
