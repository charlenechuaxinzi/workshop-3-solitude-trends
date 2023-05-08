<script>
	import { onMount } from 'svelte';
	import LinePlot from './lib/LinePlot.svelte';
	import { fetchRandomData } from './lib/random';

	let data = [];

	onMount(async () => {
		data = await fetchRandomData();
	});
</script>

<main>
	<h1 class="windface">LONELINESS</h1>
</main>

<style>
</style>
