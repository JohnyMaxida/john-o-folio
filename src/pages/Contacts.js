// import "./style.css";
// import Header from "./../components/header/Header"

import project1 from "./../img/projects/01.jpg";
import project2 from "./../img/projects/02.jpg";
import project3 from "./../img/projects/03.jpg";
import project4 from "./../img/projects/04.jpg";
import project5 from "./../img/projects/05.jpg";
import project6 from "./../img/projects/06.jpg";

const Contacts = () => {
    return (
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Bangkok, Thailand</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Phone</h2>
                        <p><a href="tel:+66895453899">+66895453899</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="https://t.me/johnmaxida">@johnmaxida</a></p>
                    </li>
					<li className="content-list__item">
                        <h2 className="title-2">Website</h2>
                        <p><a href="www.serebreum.netify.app">serebreum.netify.app</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:JohnMaxiTesla@proton.me">JohnMaxiTesla@proton.me</a></p>
                    </li>
                </ul>
        </div>
    </main>
	)
};
export default Contacts;





