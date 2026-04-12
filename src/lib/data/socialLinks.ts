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
		url: "mailto:hello@example.com",
		ctaText: "Napište mi",
		showInFooter: true,
		showInAbout: false,
	},
	{
		iconId: "simple-icons:linkedin",
		platformName: "LinkedIn",
		url: "https://example.com/linkedin",
		ctaText: "Spojme se",
		showInFooter: true,
		showInAbout: true,
	},
	{
		iconId: "simple-icons:github",
		platformName: "GitHub",
		url: "https://example.com/github",
		ctaText: "Mrkněte na kód",
		showInFooter: true,
		showInAbout: true,
	},
	{
		iconId: "simple-icons:instagram",
		platformName: "Instagram",
		url: "https://example.com/instagram",
		ctaText: "Sledujte mě",
		showInFooter: true,
		showInAbout: true,
	},
	{
		iconId: "simple-icons:discord",
		platformName: "Discord",
		url: "https://example.com/discord",
		ctaText: "Napište na Discord",
		showInFooter: true,
		showInAbout: false,
	},
];
