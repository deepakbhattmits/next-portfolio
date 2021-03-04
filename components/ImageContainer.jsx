/** @format */

import DarkModeToggle from './DarkModeToggle';

// import styles from '../styles/ImageContainer.module.css';

const ImageContainer = ({ user: { avatar_url, name, location } }) => {
	return (
		<>
			{/* <DarkModeToggle /> */}
			<div className='ui img-container'>
				<img
					className='ui circular image'
					src={avatar_url}
					alt='profile'
					width='80'
					height='80'
				/>
			</div>
			<div className='description'>
				<div className='ui list'>
					<div className='item'>
						<div className='header'>{name}</div>
					</div>
					<div className='item'>
						<i className='mobile alternate icon'></i>
						<div className='content'>+91 - 8660272372</div>
					</div>
					<div className='item'>
						<i className='map marker alternate icon'></i>
						<div className='content'>
							{!!location ? location : 'Bangalore'}, India
						</div>
					</div>
					<div className='item'>
						<i className='envelope outline icon'></i>
						<div className='content'>
							<a href='mailto:deepakbhattmits@gmail.com'>
								deepakbhattmits@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.img-container {
					display: flex;
					justify-content: center;
				}
				.img-container img.ui.circular.image:not([src='']) {
					background: #0003;
					color: transparent;
				}
				.img-container img.ui.circular.image:not([src='']):before {
					content: 'No Profile';
					color: #000;
					position: absolute;
					top: 35px;
				}
				.description .ui.list .header {
					text-align: center;
					margin: 5px 0;
					color: var(--color-primary);
				}
				.description .ui.list .item {
					margin: 5px 0;
				}
			`}</style>
		</>
	);
};
export default ImageContainer;
