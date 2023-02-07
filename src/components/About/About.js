import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./about.css";
import ArturasImg from "../../assets/img/Artur.png";
import TonyImg from "../../assets/img/Anton.png";
import IgnasImg from "../../assets/img/Ignas.png";
import { SiJavascript, SiReact, SiRedux, SiNodedotjs, SiExpress } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import AboutFingers from "../AboutFingers/AboutFingers";

function About() {
	const teamMembers = [
		{
			img: ArturasImg,
			role: "Developer",
			name: "Artur Januska",
			about: "Co-founder and lorem impsum imperamente lorenos pulva viva la vulva super integrante laviolo trivula corso apcahatica attica rolva",
			linkedin: "",
			github: "",
		},
		{
			img: TonyImg,
			role: "Developer",
			name: "Anton Polujanov",
			about: "Co-founder and alpha bravo ultra megatron freestyle rack and dank style lorem ipsum copy alphabetica numeros gratis tocayo impresante punani tsunami",
			linkedin: "",
			github: "",
		},
		{
			img: IgnasImg,
			role: "Developer",
			name: "Ignas Venckunas",
			about: "Co-founder and super assassin italiano biciclete lamba ursula la bomba contando trieste no des coutes pas touche exuberant activante trudo",
			linkedin: "",
			github: "",
		},
	];

	return (
		<div className="about container">
			<h2>Our band</h2>
			<div className="about-cards">
				{teamMembers.map((member, i) => (
					<div
						key={i}
						className="single-about-card"
					>
						<img
							src={member.img}
							alt="team member"
						/>
						<h5>{member.role}</h5>
						<h3>{member.name}</h3>
						<p>{member.about}</p>
						<div className="about-socials">
							<BsLinkedin className="about-socials-icon" />
							<BsGithub className="about-socials-icon" />
						</div>
					</div>
				))}
			</div>
			<h2>Development tools and technologies</h2>
			<div className="tools-icons-container">
				<div className="top">
					<SiJavascript className="tools-icons" />
					<SiReact className="tools-icons" />
					<SiRedux className="tools-icons" />
				</div>
				<div className="mid">
					<SiNodedotjs className="tools-icons" />
					<SiExpress className="tools-icons" />
				</div>
				<div className="bot">
					<FaSass className="tools-icons" />
				</div>
			</div>
		</div>
	);
}

export default About;
