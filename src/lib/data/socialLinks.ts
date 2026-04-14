export interface SocialLink {
	iconId: string;
	platformName: string;
	url: string;
	ctaText: string;
	showInFooter: boolean;
	showInAbout: boolean;
}

export const socialLinks: SocialLink[] = [
	{
		iconId: "lucide:mail",
		platformName: "Email",
		url: "mailto:ahoj@klimondra.eu",
		ctaText: "Napište mi",
		showInFooter: true,
		showInAbout: false,
	},
	{
		iconId: "simple-icons:linkedin",
		platformName: "LinkedIn",
		url: "https://www.linkedin.com/in/ond%C5%99ej-kl%C3%ADma/",
		ctaText: "Spojme se",
		showInFooter: true,
		showInAbout: true,
	},
	{
		iconId: "simple-icons:github",
		platformName: "GitHub",
		url: "https://github.com/Klimondra",
		ctaText: "Mrkněte na kód",
		showInFooter: true,
		showInAbout: true,
	},
	{
		iconId: "simple-icons:instagram",
		platformName: "Instagram",
		url: "https://www.instagram.com/klimondra/",
		ctaText: "Sledujte mě",
		showInFooter: true,
		showInAbout: true,
	},
	{
		iconId: "simple-icons:discord",
		platformName: "Discord",
		url: "https://discordapp.com/users/821336004643520512",
		ctaText: "Napište na Discord",
		showInFooter: true,
		showInAbout: false,
	},
];
