<template>
	<section class="hero">
		<div class="bg-container">
			<nuxt-img class="bg-yellow" src="/home//hyperloot-cc0wars-hero-yellow.jpg" preload quality="100" loading="lazy" />
			<nuxt-img class="bg-blue" src="/home//hyperloot-cc0wars-hero-blue.jpg" preload quality="100" loading="lazy" />
		</div>
	</section>
</template>

<style lang="scss">

$bg-color: #222429;
$bg-zindex-yellow: 2;
$bg-zindex-blue: 1;

.hero {
	display: flex;
	background-color: $bg-color;
}

.bg-container {
	position: relative;
	display: flex;
	width: 100%;
}

.bg-blue {
	position: absolute;
	z-index: $bg-zindex-blue;
	top: 0;
	left: 0;
	width: 100%;
}

.bg-yellow {
	position: relative;
	z-index: $bg-zindex-yellow;
	width: 100%;
	opacity: 0;
}
</style>
