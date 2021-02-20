/** @format */
import Link from 'next/link';
const Socials = ({ socials }) => {
	return (
		<div className='social'>
			{/* <div className="ui large horizontal list">
      <div className="item">
        <i className="github icon"></i>
      </div>
      <div className="item">
        <i className="linkedin icon"></i>
      </div>
      <div className="item">
        <i className="twitter icon"></i>
      </div>
        <div className="item">
      <i className="google plus icon"></i>
      </div>
    </div> */}
			{socials?.map(({ name, icon, href }, index) => (
				<Link href={href} key={index}>
					<a
						target='_blank'
						title={name}
						className={`ui circular ${icon} icon button`}>
						<i className={`${icon} icon`}></i>
					</a>
				</Link>
			))}

			{/* <button className='ui circular twitter icon button'>
				<i className='twitter icon'></i>
			</button>
			<button className='ui circular linkedin icon button'>
				<i className='linkedin icon'></i>
			</button>
			<button className='ui circular google plus icon button'>
				<i className='google plus icon'></i>
			</button> */}
			<style jsx>{`
				.social {
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 10px 0 0;
				}

				.social .ui.horizontal.list > .item > i.icon {
					width: 35px;
					height: 35px;
					padding: 0;
					justify-content: center;
					display: flex;
					align-items: center;
					background: #7726ed;
					border-radius: 100%;
					color: #fff;
				}
				.social .ui.circular.button:hover {
					box-shadow: 0 0 10px #000;
				}
			`}</style>
		</div>
	);
};
export default Socials;
