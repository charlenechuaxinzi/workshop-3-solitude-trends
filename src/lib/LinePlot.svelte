<script>
	import * as Plot from '@observablehq/plot';

	export let data;

	/** @type {HTMLElement} */
	$: plotEl = Plot.plot({
		className: 'plot__line',
		y: { grid: true },
		marks: [Plot.line(data, { x: 'date', y: 'value' })]
	});
</script>

<div class="plot">
	{@html plotEl.outerHTML}
</div>

<style>
	.plot > :global(.plot__line) {
		background: transparent;
	}
</style>
