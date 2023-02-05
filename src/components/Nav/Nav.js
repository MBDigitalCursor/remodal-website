import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNavLink, setShowMobileNav } from "../../store/generalStore";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import "./nav.css";

function Nav() {
	const dispatch = useDispatch();
	const { activeNavLink, showMobileNav } = useSelector((state) => state.generalSlice);

	const handleLinkColor = (i) => {
		dispatch(setActiveNavLink(i));
	};

	const openMobileNav = () => {
		dispatch(setShowMobileNav(!showMobileNav));
	};

	const links = ["About", "Services", "Portfolio", "Contacts"];

	return (
		<nav>
			<div className="nav container">
				<p>remodal.</p>
				<div className={showMobileNav ? "links-container show slide-in-right-nav" : "links-container hidden"}>
					{links.map((link, i) => (
						<li
							key={i}
							onClick={() => handleLinkColor(i)}
							className={activeNavLink === i ? "active-link" : ""}
						>
							{link}
						</li>
					))}
				</div>
				{showMobileNav ? (
					<IoCloseSharp
						onClick={openMobileNav}
						className="nav-close-btn slide-in-right-nav"
					/>
				) : (
					<FaBars
						onClick={openMobileNav}
						className=" nav-burger"
					/>
				)}
			</div>
		</nav>
	);
}

export default Nav;
