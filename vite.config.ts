import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { defineConfig } from "vite-plus";

export default defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	lint: {},
	fmt: {
		useTabs: true,
		tabWidth: 4,
		singleQuote: false,
		printWidth: 100,
		sortImports: true,
		sortTailwindcss: {
			stylesheet: "./src/lib/css/layout.css",
		},
		sortPackageJson: false,
		ignorePatterns: [
			"package-lock.json",
			"pnpm-lock.yaml",
			"yarn.lock",
			"bun.lock",
			"bun.lockb",
			"/static/",
		],
	},
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
});
