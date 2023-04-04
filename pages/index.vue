<template>
	<NuxtLayout>
		<PagesHomeHero />
		<PagesHomeInfo />
		<PagesHomeSignUp />
	</NuxtLayout>
</template>

<script setup>
useServerSeoMeta({
  title: 'CC0 Wars | HyperLoot',
  ogTitle: 'CC0 Wars | HyperLoot',
  description: 'Get ready to join the battle with HyperLoot in CC0 Wars! Coming soon to iOS and Android.',
  ogDescription: 'Get ready to join the battle with HyperLoot in CC0 Wars! Coming soon to iOS and Android.',
  ogImage: 'https://cc0wars.com/hyperloot-cc0wars-hero-facebook.jpg',
  twitterImage: 'https://cc0wars.com/hyperloot-cc0wars-hero-twitter.jpg',
  twitterCard: 'summary_large_image',
});
</script>
