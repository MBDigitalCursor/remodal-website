import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNavLink, setShowMobileNav } from "../../store/generalStore";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import "./nav.css";

function Nav() {
	const dispatch = useDispatch();
	const { activeNavLink, showMobileNav } = useSelector((state) => state.generalSlice);
	const links = ["About", "Services", "Portfolio", "Contacts"];

	const handleLinkColor = (i) => {
		console.log("i ===", i);
		dispatch(setActiveNavLink(i));
		dispatch(setShowMobileNav(false));
	};

	const openMobileNav = () => {
		dispatch(setShowMobileNav(!showMobileNav));
	};

	const handleClickScroll = (i) => {
		const sectionScrollTo = links[i].toLowerCase();
		const element = document.querySelector(`.${sectionScrollTo}`);
		if (element) {
			const targetY = element.getBoundingClientRect().top + window.pageYOffset;
			const easing = (t) => (t < 0.4 ? 1 * t * t * t : (t - 0.5) * (2 * t - 2) * (2 * t - 2) + 1);
			const start = performance.now();
			const duration = 1000;

			window.requestAnimationFrame(function step(timestamp) {
				const time = timestamp - start;
				const percent = Math.min(time / duration, 1);
				const diff = targetY - window.pageYOffset;
				const easingDiff = diff * easing(percent);

				window.scrollTo(0, window.pageYOffset + easingDiff);

				if (time < duration) {
					window.requestAnimationFrame(step);
				}
			});
		}
	};

	const scrollToTop = () => {
		const targetY = 0;
		const easing = (t) => (t < 0.4 ? 1 * t * t * t : (t - 0.5) * (2 * t - 2) * (2 * t - 2) + 1);
		const start = performance.now();
		const duration = 1000;

		window.requestAnimationFrame(function step(timestamp) {
			const time = timestamp - start;
			const percent = Math.min(time / duration, 1);
			const diff = targetY - window.pageYOffset;
			const easingDiff = diff * easing(percent);

			window.scrollTo(0, window.pageYOffset + easingDiff);

			if (time < duration) {
				window.requestAnimationFrame(step);
			}
		});
		dispatch(setShowMobileNav(false));
		dispatch(setActiveNavLink(null));
	};

	return (
		<nav>
			<div className="nav container">
				<p onClick={scrollToTop}>remodal.</p>
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
