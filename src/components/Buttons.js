import React from "react";
import emailIcon from "../images/emailIcon.png";
import linkedInIcon from "../images/linkedInIcon.png";

export default function Buttons() {
	return (
		<div className="btnContainer">
			<button className="btn btnOne">
				<img src={emailIcon} />
				<label>Email</label>
			</button>
			<button className="btn btnTwo">
				<img src={linkedInIcon} />
				<label>LinkedIn</label>
			</button>
		</div>
	);
}
