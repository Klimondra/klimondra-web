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
			"Jednoduchá chatovací aplikace umožňující uživatelům komunikaci v reálném čase.",
		technologies: [
			"TypeScript",
			"Next.js",
			"Go",
			"PostgreSQL",
			"React",
			"Tailwind CSS",
			"Git",
			"GitHub",
		],
		visibleInHero: true,
		thumbnailImage: {
			source: chatAppImage,
			alt: "Chat App",
		},
	},
	{
		name: "Volební kalkulačka 2025",
		slug: "volebni-kalkulacka-2025",
		description:
			"Volební kalkulačka je nástroj, který pomáhá voličům najít jejich politickou shodu, především s Petrem Cibulkou.",
		technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Git", "GitHub"],
		visibleInHero: true,
		thumbnailImage: {
			source: volebniKalkulackaImage,
			alt: "Volební kalkulačka",
		},
	},
	{
		name: "Web divadelko-zvonek.cz",
		slug: "zvonek-web",
		description: "Webová stránka pro Loutkové divadlo Zvonek v Hořicích, jehož jsem členem.",
		technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
		visibleInHero: true,
		thumbnailImage: {
			source: zvonekWebImage,
			alt: "Zvonek Web",
		},
	},
];
