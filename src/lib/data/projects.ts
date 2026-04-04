import chatAppImage from "$lib/assets/images/chat-app-screenshot.webp";
import volebniKalkulackaImage from "$lib/assets/images/volebni-kalkulacka-screenshot.webp";
import zvonekWebImage from "$lib/assets/images/zvonek-web-screenshot.webp";

export interface Project {
	name: string;
	description: string;
	technologies: string[];
	thumbnailImage: string;
}

export const projects: Project[] = [
	{
		name: "Chat Application",
		description:
			"Real-time chatovací aplikace s podporou skupinových konverzací a sdílení souborů.",
		technologies: ["TypeScript", "Svelte", "Tailwind CSS", "Docker"],
		thumbnailImage: chatAppImage,
	},
	{
		name: "Volební kalkulačka",
		description:
			"Interaktivní nástroj pro porovnání politických programů a nalezení shody s kandidáty.",
		technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
		thumbnailImage: volebniKalkulackaImage,
	},
	{
		name: "Zvonek Web",
		description: "Moderní webová prezentace s intuitivním rozhraním a responzivním designem.",
		technologies: ["HTML", "CSS", "JavaScript", "Git"],
		thumbnailImage: zvonekWebImage,
	},
];
