<template>
	<section class="hero">
		<div class="btn-play-container" ref="btnContainer">
			<div class="btn-play" @click="onPlayBtnClick">
				<svg class="icon-play" width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.692 0.523001L20.492 10.398C21.393 10.915 22 11.886 22 13C22 14.104 21.404 15.066 20.52 15.584L4.608 25.558L4.595 25.538C4.482 25.608 4.363 25.672 4.24 25.729C4.235 25.731 4.231 25.733 4.226 25.735C4.106 25.789 3.982 25.835 3.854 25.873C3.845 25.876 3.836 25.878 3.827 25.881C3.772 25.898 3.717 25.911 3.66 25.924C3.65 25.926 3.641 25.929 3.631 25.931C3.568 25.945 3.504 25.956 3.44 25.966C3.43 25.968 3.419 25.97 3.409 25.97C3.355 25.978 3.301 25.984 3.246 25.989C3.229 25.99 3.212 25.992 3.195 25.993C3.131 25.997 3.066 26 3 26C1.343 26 0 24.657 0 23V3C0 1.343 1.343 0 3 0C3.628 0 4.21 0.193001 4.692 0.523001Z" fill="#2A2D34"/>
				</svg>
			</div>
			<div class="btn-play-bg-effect-static" />
			<div class="btn-play-bg-effect" />
		</div>
		<div class="bg-container" ref="bgContainer">
			<nuxt-img class="bg-yellow" src="/home//hyperloot-cc0wars-hero-yellow.jpg" preload quality="80" loading="lazy" />
			<nuxt-img class="bg-blue" src="/home//hyperloot-cc0wars-hero-blue.jpg" preload quality="80" loading="lazy" />
		</div>
		<Overlay v-if="isOverlayActive" videoID="sjPGsK5m3wM" @on-overlay-click="closeOverlay"/>
	</section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const bgContainer = ref(null);
const btnContainer = ref(null);

onMounted(() => {
	const bgYellow = bgContainer.value.querySelector('.bg-yellow');

	// Adjusts the opacity of image based on the mouse pointer's distance from the center of the button container towards the edges.
	const updateOpacity = (event) => {
		const containerRect = bgContainer.value.getBoundingClientRect();
		const btnRect = btnContainer.value.getBoundingClientRect();
		const centerX = btnRect.left - containerRect.left + btnRect.width / 2;
		const centerY = btnRect.top - containerRect.top + btnRect.height / 2;

		const x = event.clientX - containerRect.left;
		const y = event.clientY - containerRect.top;

		const distanceX = Math.abs(centerX - x);
		const distanceY = Math.abs(centerY - y);

		const maxDistanceX = containerRect.width / 2;
		const maxDistanceY = containerRect.height / 2;

		const normalizedDistanceX = distanceX / maxDistanceX;
		const normalizedDistanceY = distanceY / maxDistanceY;

		const maxNormalizedDistance = Math.sqrt(Math.pow(normalizedDistanceX, 2) + Math.pow(normalizedDistanceY, 2));

		const opacity = 1 - maxNormalizedDistance;

		bgYellow.style.opacity = opacity;
	};

	bgContainer.value.addEventListener('mousemove', updateOpacity);
	btnContainer.value.addEventListener('mousemove', updateOpacity);
	window.addEventListener('resize', updateOpacity);

	const onKeyUp = (event) => {
		if (event.key === 'Escape') {
			closeOverlay();
		}
	};

	window.addEventListener('keyup', onKeyUp);

	onUnmounted(() => {
		bgContainer.value.removeEventListener('mousemove', updateOpacity);
		btnContainer.value.removeEventListener('mousemove', updateOpacity);
		window.removeEventListener('resize', updateOpacity);
		window.removeEventListener('keyup', onKeyUp);
	});
});

const isOverlayActive = ref(false);

const onPlayBtnClick = () => {
	console.log('Play button clicked');

	isOverlayActive.value = true;
};

const closeOverlay = () => {
	isOverlayActive.value = false;
};
</script>

<style lang="scss">

$bg-zindex-content: 3;
$bg-zindex-yellow: 2;
$bg-zindex-blue: 1;

.hero {
	// Make sure the button is positioned relative to this container
	position: relative;
	display: flex;
	background-color: global.$color-bg;
	height: 70rem;
	padding-top: 3rem;
	overflow: hidden;
}

.bg-container {
	// Make sure the images are positioned relative to this container
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
}

.bg-blue {
	position: absolute;
	z-index: $bg-zindex-blue;
	top: 0;
	left: 50%;
	height: 100%;
	object-fit: cover;
	transform: translateX(-50%);
	pointer-events: none;
}

.bg-yellow {
	position: absolute;
	z-index: $bg-zindex-yellow;
	top: 0;
	left: 50%;
	height: 100%;
	object-fit: cover;
	opacity: 0;
	transform: translateX(-50%);
	transition: opacity 280ms ease-out;
	pointer-events: none;
}

.btn-play-container {
	position: absolute;
	z-index: $bg-zindex-content;
	top: 58%;
	left: 51%;
	transform: translate(-50%, -50%);
}

.btn-play {
	// Make sure the button is positioned above its bg effect
	position: relative;
	z-index: $bg-zindex-content + 2;
	width: 5.5rem;
	height: 5.5rem;
	border-radius: 100%;
	cursor: pointer;

	&:after {
		// Background color of the button
		position: absolute;
		z-index: $bg-zindex-content + 2;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: global.$color-white;
		border-radius: 100%;
		transition: transform 440ms global.$ease-out-quint;
	}

	&:hover {
		&:after {
			transform: scale(1.08);
		}
	}
}

.icon-play {
	position: absolute;
	z-index: $bg-zindex-content + 3;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) translateX(2px) translateY(1px);
}

@keyframes wave {
	0% {
		transform: scale(1.4);
		opacity: 0.25;
	}
	100% {
		transform: scale(2.4);
		opacity: 0;
	}
}

.btn-play-bg-effect-static {
	position: absolute;
	z-index: $bg-zindex-content + 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 100%;
	background-color: global.$color-white;
	opacity: 0.35;
	transform: scale(1.4);
}

.btn-play-bg-effect {
	position: absolute;
	z-index: $bg-zindex-content + 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 100%;
	background-color: global.$color-white;
	opacity: 0.25;
	transform: scale(1.4);
	animation: wave 2000ms infinite linear;
}

</style>
