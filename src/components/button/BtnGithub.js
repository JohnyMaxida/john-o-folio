import "./style.css";
// import vk from "./../../img/icons/vk.svg";
import gitHub from "./gitHub-black.svg";

const BtnGithub = ({link}) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHub} alt="" />
			GitHub repo
		</a>
)
};
export default BtnGithub;