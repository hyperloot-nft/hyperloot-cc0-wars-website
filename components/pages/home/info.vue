<template>
	<section class="info">
		<div class="container">
			<div class="tagline">
				<h2>Community-owned.<br>Team-based multiplayer.<br>Fast-paced action strategy.</h2>
			</div>
			<div class="work">
				<div class="partner">
					<div class="title">Streamer and influencer partnership</div>
					<div class="email"><a href="mailto:creator@cc0wars.com?subject=Creator Partnership">creators@cc0wars.com</a></div>
				</div>
				<div class="business">
					<div class="title">Business inquiry</div>
					<div class="email"><a href="mailto:business@cc0wars.com?subject=Business inquiry">business@cc0wars.com</a></div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

@import '@/assets/styles/media-query.scss';

$top-spacing: 12rem;
$bottom-spacing: 12rem;
$work-border-color: #43444D;

a {
	color: global.$color-text-dark;

	&:hover {
		color: global.$color-text;
	}
}

h2 {
	line-height: global.$font-line-height-sm;

	@include media(">sm", '<=md') {
		font-size: global.$font-size-xxxl;
	}

	@include media('<=sm') {
		font-size: global.$font-size-xxl;
	}
}

.info {
	display: flex;
	width: 100%;
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

	@include media('>lg') {
		max-width: global.$container-width;
		justify-content: space-between;
	}

	@include media('>sm', '<=lg') {
		flex-direction: column;
		margin-left: global.$side-spacing-sm;
		margin-right: global.$side-spacing-sm;
	}

	@include media('<=sm') {
		flex-direction: column;
		margin-left: global.$side-spacing-sm;
		margin-right: global.$side-spacing-sm;
	}
}

.tagline {
	max-width: 38.75rem;
	width: 100%;

	@include media('>lg') {
		margin-right: global.$grid-gutter-width;
	}

	@include media('<=lg') {
		text-align: center;
	}
}

.work {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 10rem;

	@include media('>lg') {
		padding-top: 0.25rem;
		padding-left: global.$grid-gutter-width;
		border-left: 1px solid $work-border-color;
	}

	@include media('>sm', '<=lg') {
		margin-top: 4rem;
		padding-top: 4rem;
		border-top: 1px solid $work-border-color;
		text-align: center;
	}

	@include media('<=sm') {
		margin-top: 3rem;
		padding-top: 3rem;
		border-top: 1px solid $work-border-color;
		text-align: center;
	}
}

.partner {
	@include media('>lg') {
		margin-bottom: 1rem;
	}

	@include media('<=lg') {
		margin-bottom: global.$side-spacing-sm;
	}
}

.title {
	font-size: global.$font-size-xs;
}

.email {
	font-size: global.$font-size-xs;
}
</style>