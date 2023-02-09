import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNavLink, setScrollToLink, setShowMobileNav } from "../../store/generalStore";
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

	// const handleClickScroll = (i) => {
	// 	const sectionScrollTo = links[i].toLowerCase();
	// 	const element = document.querySelector(`.${sectionScrollTo}`);
	// 	if (element) {
	// 		element.scrollIntoView({ behavior: "smooth" });
	// 	}
	// };

	const handleClickScroll = (i) => {
		const sectionScrollTo = links[i].toLowerCase();
		const element = document.querySelector(`.${sectionScrollTo}`);
		if (element) {
			const startingY = window.pageYOffset;
			const targetY = element.getBoundingClientRect().top + window.pageYOffset;
			const diff = targetY - startingY;
			const easing = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
			let start;

			window.requestAnimationFrame(function step(timestamp) {
				if (!start) start = timestamp;
				const time = timestamp - start;
				const percent = Math.min(time / 1000, 1);
				window.scrollTo(0, startingY + diff * easing(percent));
				if (time < 1000) {
					window.requestAnimationFrame(step);
				}
			});
		}
	};

	return (
		<nav>
			<div className="nav container">
				<p>remodal.</p>
				<div className={showMobileNav ? "links-container show slide-in-right-nav" : "links-container hidden"}>
					{links.map((link, i) => (
						<li
							key={i}
							onClick={() => {
								handleLinkColor(i);
								handleClickScroll(i);
							}}
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
