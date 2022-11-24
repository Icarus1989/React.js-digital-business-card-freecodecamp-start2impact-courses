import React from "react";
import Buttons from "./Buttons";
import image from "../images/PersonalImage.svg";

export default function Info() {
	return (
		<div className="infoSection">
			<div className="infoImgSection">
				<img src={image} className="infoImg" />
			</div>
			<h2 className="infoTitle">Alex Valente</h2>
			<h3 className="infoSubTitle">Front End Developer</h3>
			<span className="infoLink">
				<a href="https://icarus1989.github.io/FluidPortfolio/">
					fluidportfolio
				</a>
			</span>
			<Buttons />
		</div>
	);
}
