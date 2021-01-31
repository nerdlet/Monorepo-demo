import React from "react";
import PropTypes from "prop-types";

import A from "@monorepo-starter/a";
import RichTypography from "@monorepo-starter/richtypography";

import useStyles from "./useStyles";

function Initiative({ variant, image, url, children, ...props }) {
	const classes = useStyles(props);

	return (
		<div className={classes.root}>
			<A href={url}>
				<img
					src={image.url}
					alt={image.alt}
					className={classes.supporterLogo}
				/>
			</A>
			<RichTypography variant={variant} className={classes.support}>
				{children}
			</RichTypography>
		</div>
	);
}

Initiative.propTypes = {
	children: PropTypes.node.isRequired,
	image: PropTypes.shape({
		alt: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,
	url: PropTypes.string.isRequired,
	variant: PropTypes.string,
};

Initiative.defaultProps = {
	variant: "caption",
};

export default Initiative;
