<script lang="ts">
	import '$lib/css/layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import '@fontsource-variable/host-grotesk';
	import Navbar from '$lib/components/layout/navbar/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar />
{@render children()}
