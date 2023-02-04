import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LineLoop } from "three";
import { generalSlice, setActiveNavLink } from "../../store/generalStore";
import "./nav.css";

function Nav() {
	const dispatch = useDispatch();
	const { activeNavLink } = useSelector((state) => state.generalSlice);

	const handleLinkColor = (i) => {
		dispatch(setActiveNavLink(i));
	};

	const links = ["About", "Services", "Portfolio", "Contacts"];

	return (
		<nav>
			<div className="nav-container container">
				<p>remodal.</p>
				<ul>
					{links.map((link, i) => (
						<li
							key={i}
							onClick={() => handleLinkColor(i)}
							className={activeNavLink === i ? "active-link" : ""}
						>
							{link}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
