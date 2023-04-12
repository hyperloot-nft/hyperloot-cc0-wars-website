<template>
	<section class="info">
		<div class="container">
			<div class="tagline">
				<h2>{{ $t('home.info.tagline1') }}<br>{{ $t('home.info.tagline2') }}<br>{{ $t('home.info.tagline3') }}</h2>
			</div>
			<div class="work">
				<div class="partner">
					<div class="title">{{ $t('home.info.partner.title') }}</div>
					<div class="email"><a :href="$t('home.info.partner.emailLink')">{{ $t('home.info.partner.email') }}</a></div>
				</div>
				<div class="business">
					<div class="title">{{ $t('home.info.business.title') }}</div>
					<div class="email"><a :href="$t('home.info.business.emailLink')">{{ $t('home.info.business.email') }}</a></div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

$work-border-color: #43444D;

a {
	color: global.$color-text-dark;

	&:hover {
		color: global.$color-text;
	}
}

h2 {
	line-height: global.$font-line-height-sm;

	@include query.media(">sm", '<=md') {
		font-size: global.$font-size-xxxl;
	}

	@include query.media('<=sm') {
		font-size: global.$font-size-xxl;
	}
}

.info {
	display: flex;
	width: 100%;

	@include query.media(">lg") {
		margin-top: 12rem;
		margin-bottom: 12rem;
	}

	@include query.media(">sm", "<=lg") {
		margin-top: 8rem;
		margin-bottom: 8rem;
	}

	@include query.media("<=sm") {
		margin-top: 4rem;
		margin-bottom: 6rem;
	}
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: global.$container-width;
	width: 100%;
	margin-left: auto;
	margin-right: auto;

	@include query.media('>lg') {
		max-width: global.$container-width;
	}

	@include query.media('>sm', '<=lg') {
		flex-direction: column;
		margin-left: global.$side-spacing-sm;
		margin-right: global.$side-spacing-sm;
	}

	@include query.media('<=sm') {
		flex-direction: column;
		margin-left: global.$side-spacing-sm;
		margin-right: global.$side-spacing-sm;
	}
}

.tagline {
	max-width: 38.75rem;
	width: 100%;

	@include query.media('>lg') {
		margin-right: global.$grid-gutter-width;
	}

	@include query.media('<=lg') {
		text-align: center;
	}
}

.work {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 10rem;

	@include query.media('>lg') {
		padding-top: 0.25rem;
		padding-left: global.$grid-gutter-width;
		border-left: 1px solid $work-border-color;
	}

	@include query.media('>sm', '<=lg') {
		margin-top: 4rem;
		padding-top: 4rem;
		border-top: 1px solid $work-border-color;
		text-align: center;
	}

	@include query.media('<=sm') {
		margin-top: 3rem;
		padding-top: 3rem;
		border-top: 1px solid $work-border-color;
		text-align: center;
	}
}

.partner {
	@include query.media('>lg') {
		margin-bottom: 1rem;
	}

	@include query.media('<=lg') {
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