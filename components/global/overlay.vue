<template>
	<div class="overlay" @click="$emit('closeOverlay')">
		<div class="overlay-background"/>
		<div class="content">
			<svg class="icon-close" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" @click="$emit('closeOverlay')">
				<path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="white"/>
				<path d="M18.1998 9.80005L9.7998 18.2" stroke="#222429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M9.7998 9.80005L18.1998 18.2" stroke="#222429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			<iframe
				class="video"
				:src="'https://www.youtube.com/embed/' + videoID + '?autoplay=1'"
				allow="autoplay; encrypted-media"
				frameborder="0"
				allowfullscreen
			/>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
  videoID: String
});

</script>

<style lang="scss" scoped>
.overlay {
	position: fixed;
	z-index: global.$zindex-full-screen;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
}

.overlay-background {
	position: absolute;
	z-index: global.$zindex-bg;
	width: 100%;
	height: 100%;
	background-color: global.$color-bg;
	opacity: 0.8;
}

.content {
	// Make sure the button is positioned relative to this container
	position: relative;
	flex-basis: 80%;
	max-height: 80%;
	max-width: 80%;
	aspect-ratio: 16 / 9;
}

.video {
	width: 100%;
	height: 100%;
	
}

.icon-close {
	position: absolute;
	z-index: global.$zindex-full-screen + 1;
	top: -6%;
	right: -3%;
	transition: opacity 380ms global.$ease-out-quint;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
}
</style>
