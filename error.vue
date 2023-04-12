<template>
	<div class="not-found">
		<Navbar />
		<div class="container">
			<h1>404</h1>
			<nuxt-link to="/">Go to home</nuxt-link>
		</div>
		<Footer />
	</div>
</template>

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
