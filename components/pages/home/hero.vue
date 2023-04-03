<template>
	<section class="hero">
		<div class="bg-container" ref="bgContainer">
			<nuxt-img class="bg-yellow" src="/home//hyperloot-cc0wars-hero-yellow.jpg" preload quality="100" loading="lazy" />
			<nuxt-img class="bg-blue" src="/home//hyperloot-cc0wars-hero-blue.jpg" preload quality="100" loading="lazy" />
		</div>
	</section>
</template>

<script>
import { onUnmounted } from 'vue';

export default {
  mounted() {
    const bgContainer = this.$refs.bgContainer;
    const bgYellow = bgContainer.querySelector('.bg-yellow');

    const updateOpacity = (event) => {
      const { left, top, width, height } = bgContainer.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const centerX = width / 2;
      const centerY = height / 2;
      const distanceX = Math.abs(centerX - x);
      const distanceY = Math.abs(centerY - y);
      const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
      const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
      const opacity = (maxDistance - distance) / maxDistance;

      bgYellow.style.opacity = opacity;
    };

    bgContainer.addEventListener('mousemove', updateOpacity);

    // Add a resize event listener to update the calculations when the browser is resized
    window.addEventListener('resize', updateOpacity);

    // Cleanup the event listeners when the component is unmounted
    onUnmounted(() => {
      bgContainer.removeEventListener('mousemove', updateOpacity);
      window.removeEventListener('resize', updateOpacity);
    });
  },
};
</script>

<style lang="scss">

$bg-color: #222429;
$bg-zindex-yellow: 2;
$bg-zindex-blue: 1;

.hero {
	display: flex;
	background-color: $bg-color;
	height: 70rem;
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
}
</style>
