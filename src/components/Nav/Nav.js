import React from "react";
import "./nav.css";

function Nav() {
	return (
		<nav>
			<div className="nav-container container">
				<p>remodal.</p>
				<ul>
					<li>About</li>
					<li>Services</li>
					<li>Portfolio</li>
					<li>Contacts</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
