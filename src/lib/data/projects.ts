import chatAppImage from "$lib/assets/images/chat-app-screenshot.webp";
import volebniKalkulackaImage from "$lib/assets/images/volebni-kalkulacka-screenshot.webp";
import zvonekWebImage from "$lib/assets/images/zvonek-web-screenshot.webp";

export interface Project {
	name: string;
	slug: string;
	description: string;
	technologies: string[];
	visibleInHero: boolean;
	thumbnailImage: ProjectThumbnail;
}

export interface ProjectThumbnail {
	source: string;
	alt: string;
}

export const projects: Project[] = [
	{
		name: "Chat App",
		slug: "chatapp",
		description:
			"Jednoduchá chatovací aplikace umožňující uživatelům komunikaci v reálném čase. Využívá frontend v Next.js a backend v jazyce Go. Databáze je v PostgreSQL. Naučil jsem se zde jak fungují WebSockety a jak je implementovat. Kód je na mém GitHubu.",
		technologies: ["TypeScript", "Next.js", "React", "Go", "PostgreSQL"],
		visibleInHero: true,
		thumbnailImage: {
			source: chatAppImage,
			alt: "Chat App",
		},
	},
	{
		name: "Volební kalkulačka",
		slug: "volebni-kalkulacka",
		description:
			"Interaktivní nástroj pro porovnání politických programů a nalezení shody s kandidáty.",
		technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
		visibleInHero: true,
		thumbnailImage: {
			source: volebniKalkulackaImage,
			alt: "Volební kalkulačka",
		},
	},
	{
		name: "Zvonek Web",
		slug: "zvonek-web",
		description: "Moderní webová prezentace s intuitivním rozhraním a responzivním designem.",
		technologies: ["HTML", "CSS", "JavaScript", "Git"],
		visibleInHero: true,
		thumbnailImage: {
			source: zvonekWebImage,
			alt: "Zvonek Web",
		},
	},
];
