import React from "react";

const Button = ({ onClick, children, isSelected }) => (
	<button
		style={{
			border: 0,
			backgroundColor: isSelected ? "green" : "red",
			color: isSelected ? "black" : "white",
			padding: "12px 24px",
			margin: "12px",
			borderRadius: "3px"
		}}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
