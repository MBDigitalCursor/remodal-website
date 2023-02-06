import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar, Thumbs } from "swiper";
import "./portfolio.css";

function ProjectSlider({ projects }) {
	console.log(projects);

	return (
		<div className='swiper-container'>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
			>
				{projects.map((project, i) => (
					<SwiperSlide key={i}>
						<img
							src={project.img}
							alt=''
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default ProjectSlider;
