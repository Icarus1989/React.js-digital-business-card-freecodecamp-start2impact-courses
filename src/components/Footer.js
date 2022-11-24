import React from "react";
import githubIcon from "../images/GitHubIcon.png";
import igIcon from "../images/InstagramIcon.png";

// import images

export default function Footer() {
	return (
		<footer className="footerSection">
			<a href="">
				<img src={githubIcon} />
			</a>
			<a href="">
				<img src={igIcon} />
			</a>
		</footer>
	);
}
