import React, { useEffect } from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./portfolio.css";

const SwiperComponent = ({ projects }) => {
	useEffect(() => {
		const swiper = new Swiper(".swiper-container", {
			slidesPerView: 3,
			centeredSlides: true,
			centerInsufficientSlides: true,
			centerSlidesWithin: window.innerWidth,
			grabCursor: true,
			spaceBetween: 100,
			initialSlide: Math.floor(projects.length / 2),
			on: {
				slideChange: function () {
					const activeSlide = this.slides[this.activeIndex];
					const slides = document.querySelectorAll(".custom-slide");
					slides.forEach((slide) => {
						slide.classList.remove("center-slide");
					});
					activeSlide.classList.add("center-slide");
				},
			},
		});
		return () => swiper.destroy();
	}, []);

	return (
		<div className='swiper-component'>
			<div className='swiper-container'>
				<div className='swiper-wrapper'>
					{projects.map((project, i) => (
						<SwiperSlide
							key={i}
							className='swiper-slide custom-slide'
						>
							<img
								src={project.img}
								alt=''
							/>
							<h4>{project.title}</h4>
							<p>{project.description}</p>
							<a href={project.link}>{project.button}</a>
						</SwiperSlide>
					))}
				</div>
			</div>
		</div>
	);
};

export default SwiperComponent;
