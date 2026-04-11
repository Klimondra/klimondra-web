export interface Technology {
	name: string;
	icon: string;
	color: string;
	featured: boolean;
}

export const technologies: Technology[] = [
	{
		name: "HTML",
		icon: "devicon-plain:html5",
		color: "#E34C26",
		featured: true,
	},
	{
		name: "CSS",
		icon: "devicon-plain:css3",
		color: "#264DE4",
		featured: true,
	},
	{
		name: "JavaScript",
		icon: "devicon-plain:javascript",
		color: "#F7DF1E",
		featured: true,
	},
	{
		name: "TypeScript",
		icon: "devicon-plain:typescript",
		color: "#3178C6",
		featured: true,
	},
	{
		name: "Svelte",
		icon: "devicon-plain:svelte",
		color: "#FF3E00",
		featured: true,
	},
	{
		name: "React",
		icon: "simple-icons:react",
		color: "#61DAFB",
		featured: true,
	},
	{
		name: "Next.js",
		icon: "devicon-plain:nextjs",
		color: "#000000",
		featured: true,
	},
	{
		name: "Tailwind CSS",
		icon: "simple-icons:tailwindcss",
		color: "#38B2AC",
		featured: true,
	},
	{
		name: "C#",
		icon: "mdi:language-csharp",
		color: "#239120",
		featured: true,
	},
	{
		name: "Git",
		icon: "devicon-plain:git",
		color: "#F1502F",
		featured: true,
	},
	{
		name: "GitHub",
		icon: "akar-icons:github-fill",
		color: "#181717",
		featured: true,
	},
	{
		name: "Docker",
		icon: "ion:logo-docker",
		color: "#2496ED",
		featured: true,
	},
	{
		name: "Go",
		icon: "file-icons:go",
		color: "#007D9C",
		featured: false,
	},
	{
		name: "PostgreSQL",
		icon: "devicon-plain:postgresql",
		color: "#336791",
		featured: true,
	},
	{
		name: "WordPress",
		icon: "devicon-plain:wordpress",
		color: "#21759B",
		featured: false,
	},
];
