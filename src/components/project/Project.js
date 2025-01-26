import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({title, img, index}) => {
	return (
		<NavLink to={`/project/${index}`}>
		<li className="project">
		{title}
		<img src={img} alt={title} className="project__img" />
		</li>
		</NavLink>
	)
};

export default Project;