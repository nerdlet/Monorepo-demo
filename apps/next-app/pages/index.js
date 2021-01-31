import React from "react";

import Button from "@monorepo-starter/button";
import A from "@monorepo-starter/a";
import Layout from "@monorepo-starter/layout";
import RichTypography from "@monorepo-starter/richtypography";
import Section from "@monorepo-starter/section";
import Filter from "@monorepo-starter/filter";
//import Footer from "@monorepo-starter/footer";

import { makeStyles } from "@material-ui/core/styles";

/* import pulitzer from "../src/assets/pulitzer.png";
import cfaLogo from "../src/assets/cfa.png";

import Email from "../src/assets/email.svg";
import Facebook from "../src/assets/facebook.svg";
import Medium from "../src/assets/group-3.svg";
import LinkedIn from "../src/assets/group-3-copy.svg";
import Twitter from "../src/assets/twitter.svg"; */


const useStyles = makeStyles({
	filterButton: {
		color: "#818080",
		background: "#F0EFEF",
		border: 0,
		borderRadius: 0,
		boxShadow: "0.125rem 0.125rem 0.25rem #00000026",
		letterSpacing: 0,
		"&:hover": {
			background: "#DD4C1A",
		},
	},
	filterActiveButton: {
		border: "1px solid #DD4C1A",
		background: "#DD4C1A",
		color: "white",
	},
	filterActiveSubButton: {
		color: "#DD4C1A",
		borderBottom: "2px solid #DD4C1A",
	},
	filterCaption: {
		color: "#6A6A6A",
	},
	filterContainer: {
		justifyContent: "center",
	},
	filterSubCategory: {
		display: "flex",
		justifyContent: "center",
		paddingTop: 0,
		marginTop: "1rem",
	},
});

//Footer content

/* const QUICK_LINKS = [
	{
		title: "MORE",
		links: [
			{ href: "/about", label: "About About" },
			{ href: "/faqs", label: "FAQs" },
			{ href: "/contact", label: "Contact Us" },
		],
	},
	{
		title: "CONTACTS",
		links: [
			{ href: "/about", label: "About About" },
			{ href: "/faqs", label: "FAQs" },
			{ href: "/contact", label: "Contact Us" },
		],
	},
];
const options = {
	about: {
		about: {
			variant: "caption",
		},
		initiative: {
			variant: "caption",
		},
	},
};
const LEGAL_LINKS = {
	links: [
		{ href: "/legal/privacy", label: "PRIVACY POLICY" },
		{ href: "/legal/terms", label: "TERMS OF SERVICES" },
	],
};

const ABOUT = {
	about:
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
		"        sed diam nonumy eirmod tempor invidunt ut labore et dolore\n" +
		"        magna aliquyam erat, sed diam voluptua. At vero eos et\n" +
		"        accusam et justo duo dolores et ea rebum. Stet clita kasd\n" +
		"        gubergren, no sea takimata sanctus est",
	initiative:
		"This initiative was made possible with support \nfrom Pulitzer Center.",
};

const INITIATIVE_LOGO = {
	image: {
		url: pulitzer,
		alt: "Plutizer Center",
	},
	url: "https://link.url",
};

const CFA = {
	image: {
		url: cfaLogo,
		alt: "Code for Africa",
	},
	url: "https://codeforafrica.org",
};

const CONTACTS = {
	support: {
		email: "hello@contact.com",
		image: {
			url: Email,
			alt: "Email",
		},
	},
	socialMedia: [
		{
			url: "https://twitter.com",
			image: {
				url: Twitter,
				alt: "Twitter",
			},
		},
		{
			url: "https://facebook.com",
			image: {
				url: Facebook,
				alt: "Facebook",
			},
		},
		{
			url: "https://medium.com",
			image: {
				url: Medium,
				alt: "Medium",
			},
		},
		{
			url: "https://linkedin.com",
			image: {
				url: LinkedIn,
				alt: "LinkedIn",
			},
		},
	],
}; */

const parentTopics = [
	{ name: "All", slug: "all" },
	{ name: "Technology", slug: "technology" },
	{ name: "Policy", slug: "Policy" },
	{ name: "Culture", slug: "Culture" },
	{ name: "Research", slug: "Research" },
	{ name: "Other", slug: "other" }
]

const subTopics = [
	{ name: "Complete", slug: "complete" },
	{ name: "Active", slug: "active" },
	{ name: "Stalled", slug: "stalled" },
	{ name: "Unknown", slug: "unknown" }
]

function HomePage() {
	const classes = useStyles();
	return (
		<div
			style={{
				textAlign: "center"
			}}
		>
			<Button>this is a button</Button>
			<A href="/">This is an example of a link next js</A>


			<Layout>
				<RichTypography variant="h4">this is an example of a layout here</RichTypography>
			</Layout>

			<Section>
				<Filter
					activeTopic="all"
					parentTopics={parentTopics}
					subTopics={subTopics}
					classes={{
						activeButton: classes.filterActiveButton,
						activeSubButton: classes.filterActiveSubButton,
						button: classes.filterButton,
						caption: classes.filterCaption,
						filter: classes.filterContainer,
						subtopic: classes.filterSubCategory,
					}}
				/>
			</Section>

		</div>
	);
}

export default HomePage;
