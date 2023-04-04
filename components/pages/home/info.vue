<template>
	<section class="info">
		<div class="container">
			<div class="tagline">
				<h2>Community-owned.<br>Team-based multiplayer.<br>Fast-paced action strategy.</h2>
			</div>
			<div class="work">
				<div class="partner">
					<div class="title">Streamer and influencer partnership</div>
					<div class="email"><a href="mailto:creator@cc0wars.com">creators@cc0wars.com</a></div>
				</div>
				<div class="business">
					<div class="title">Business inquiry</div>
					<div class="email"><a href="mailto:business@cc0wars.com">business@cc0wars.com</a></div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
$top-spacing: 11.25rem;
$bottom-spacing: 11.25rem;

$work-border-color: #43444D;

h2 {
	line-height: global.$font-line-height-sm;
}

a {
	color: global.$color-text-dark;

	&:hover {
		color: global.$color-text;
	}
}

.info {
	margin-top: $top-spacing;
	margin-bottom: $bottom-spacing;
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: global.$container-width;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
}

.tagline {
	max-width: 38.75rem;
	width: 100%;
	margin-right: global.$grid-gutter-width;
}

.work {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 0.25rem;
	padding-left: global.$grid-gutter-width;
	height: 10rem;
	border-left: 1px solid $work-border-color;
}

.partner {
	margin-bottom: 1rem;
}

.title {
	font-size: global.$font-size-xs;
}

.email {
	font-size: global.$font-size-xs;
}
</style>