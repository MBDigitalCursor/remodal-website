import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./about.css";
import ArturasImg from "../../assets/img/Artur.png";
import TonyImg from "../../assets/img/Anton.png";
import IgnasImg from "../../assets/img/Ignas.png";

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
			about: "Co-founder and lorem impsum imperamente lorenos pulva viva la vulva super integrante laviolo trivula corso apcahatica attica rolva",
			linkedin: "",
			github: "",
		},
		{
			img: IgnasImg,
			role: "Developer",
			name: "Ignas Venckunas",
			about: "Co-founder and lorem impsum imperamente lorenos pulva viva la vulva super integrante laviolo trivula corso apcahatica attica rolva",
			linkedin: "",
			github: "",
		},
	];

	return (
		<div className="about container">
			<h3 className="mobile-h3">Our band and tools</h3>
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
						<div className="single-card-desc">
							<h5>{member.role}</h5>
							<h3>{member.name}</h3>
							<p>{member.about}</p>
							<div className="about-socials">
								<BsLinkedin className="about-socials-icon" />
								<BsGithub className="about-socials-icon" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default About;
