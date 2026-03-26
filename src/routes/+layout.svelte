<script lang="ts">
	import '$lib/css/layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import '@fontsource-variable/host-grotesk';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
