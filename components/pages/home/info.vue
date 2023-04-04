<template>
	<section class="info">
		<div class="container">
			<div class="tagline">
				<h2>Community-owned.</h2>
				<h2>Team-based multiplayer.</h2>
				<h2>Fast-paced action strategy.</h2>
			</div>
			<div class="work-contact">
				<div class="partner">
					<div>Streamer and influencer partnership</div>
					<div>creator@cc0wars.com</div>
				</div>
				<div class="business">
					<div>Business inquiry</div>
					<div>business@cc0wars.com</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
$top-spacing: 11.25rem;
$bottom-spacing: 11.25rem;

.info {
	margin-top: $top-spacing;
	margin-bottom: $bottom-spacing;
}

.container {
	display: flex;
	justify-content: space-between;
	width: global.$container-width;
	margin-left: auto;
	margin-right: auto;
}
</style>