<template>
	<div class="overlay">
		<div class="overlay-background"/>
		<iframe
			class="video"
			:src="'https://www.youtube.com/embed/' + videoID + '?autoplay=1'"
			allow="autoplay; encrypted-media"
			frameborder="0"
			allowfullscreen
		/>
	</div>
</template>

<script setup>
const props = defineProps({
  videoID: String
});

</script>

<style lang="scss">
.overlay {
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
}

.overlay-background {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: global.$color-bg;
	opacity: 0.8;
	// behind the iframe
	z-index: -1;
}

.video {
	flex-basis: 80%;
	max-width: 80%;
	max-height: 80%;
	aspect-ratio: 16 / 9;
}
</style>
