/** @format */
import ImageContainer from './ImageContainer';
import Skills from './Skills';
import Socials from './Socials';

const SideBar = ({ user, skills, socials }) => {
	return (
		<>
			<ImageContainer user={user} />
			<Skills skills={skills} />
			<Socials socials={socials} />
		</>
	);
};
export default SideBar;
