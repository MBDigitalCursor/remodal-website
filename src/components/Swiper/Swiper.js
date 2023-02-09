import React from "react";
import "./swiper.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const SwiperComponent = () => {
	const projects = [
		{
			img: "https://images.unsplash.com/photo-1598707630720-eb08ef27bc11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			title: "Pirate's Quest",
			description: "An epic clicker adventure game",
			button: "Try the game",
			link: "http://www.google.com",
		},
		{
			img: "https://images.unsplash.com/photo-1529792083865-d23889753466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			title: "Statybior website",
			description: "Never ending projects, leaking pipes, thin walls",
			button: "Visit website",
			link: "http://www.google.com",
		},

		{
			img: "https://images.unsplash.com/photo-1524272332618-3a94122bb0c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			title: "Zoo Market",
			description: "Dog food, dog food, cat food, cat shit, fish & chips",
			button: "Visit website",
			link: "http://www.google.com",
		},
	];

	return (
		<Swiper
			pagination={true}
			modules={[Pagination]}
		>
			{projects.map((project, i) => (
				<SwiperSlide key={i}>
					<img
						src={project.img}
						alt=""
					/>
					<div className="slide-desc">
						<h2>{project.title}</h2>
						<h4>{project.description}</h4>
						<a
							href={project.link}
							target="_blank"
							rel="noreferrer"
						>
							{project.button}
						</a>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperComponent;
