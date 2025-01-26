import "./style.css";

const Header = () => {
    return (
	<header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>John</em></strong><br />
                a backend developer
            </h1>
            <div className="header__text">
                <p>also a deep ML and AI expert</p>
            </div>
            <a href="https://docs.google.com/document/d/1elGIsmk8SZmqFY4Gka6U0OWQfhISzPIg/edit?usp=sharing&ouid=114556656301971161343&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="btn">Download CV</a>
        </div>
    </header>
	)
};
export default Header;