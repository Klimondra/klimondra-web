export interface NavigationItem {
	label: string;
	href: string;
}

export const navigationItems: NavigationItem[] = [
	{
		label: "O mně",
		href: "/about",
	},
	{
		label: "Projekty",
		href: "/projects",
	},
	{
		label: "Kontakt",
		href: "/contact",
	},
];
