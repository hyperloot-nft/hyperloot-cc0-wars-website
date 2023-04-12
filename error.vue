<template>
	<div class="not-found">
		<Navbar />
		<div class="container">
			<h1>404</h1>
			<NuxtLink to="/">Go to home</NuxtLink>
		</div>
		<Footer />
	</div>
</template>

<script setup>
useServerSeoMeta({
  title: '404 | CC0 Wars | HyperLoot',
  ogTitle: '404 | CC0 Wars | HyperLoot',
  description: 'Get ready to join the battle with HyperLoot in CC0 Wars! Coming soon to iOS and Android.',
  ogDescription: 'Get ready to join the battle with HyperLoot in CC0 Wars! Coming soon to iOS and Android.',
  ogUrl: 'https://cc0wars.com',
  ogImage: 'https://cc0wars.com/hyperloot-cc0-wars-og-image-facebook.jpg',
  twitterImage: 'https://cc0wars.com/hyperloot-cc0-wars-og-image-twitter.jpg',
  twitterCard: 'summary_large_image',
});
</script>

<style lang="scss" scoped>

h1 {
	font-size: global.$font-size-h1;
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 80vh;
}
</style>
