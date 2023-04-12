<template>
	<section class="sign-up">
		<div class="container">
			<h2>{{ $t('home.signUp.title') }}</h2>
			<div class="description">{{ $t('home.signUp.description') }}</div>
			<form class="form" method="POST" @submit.prevent="onSignUpSubmit">
				<input class="input-text" type="text" name="email" :placeholder="$t('home.signUp.placeholderEmail')" required v-model.trim="email" @input="resetForm">
				<button class="input-button" type="submit">
					<template v-if="isFormLoading"><Loading /></template>
					<template v-else>{{ $t('home.signUp.button') }}</template>
				</button>
			</form>
			<div class="form-response" v-if="isFormSubmitted && !isFormLoading">
				<div class="form-success" v-if="isFormSubmitSuccess">{{ $t('home.signUp.formSubmitted') }}</div>
				<div class="form-error" v-else>
					<template v-if="!isEmailValid">{{ $t('home.signUp.invalidEmail') }}</template>
					<template v-else-if="!isFormSubmitSuccess">{{ $t('home.signUp.formError') }}</template>
				</div>
			</div>
			<div class="agreement">{{ $t('home.signUp.formAgreement') }}</div>
		</div>
	</section>
</template>

<script setup>
	const config = useRuntimeConfig();

	const email = ref('');
	const isEmailValid = ref(false);
	const isFormSubmitted = ref(false);
	const isFormSubmitSuccess = ref(false);
	const isFormLoading = ref(false);

	const validateEmail = (() => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		isEmailValid.value = re.test(email.value);
	});

	const onSignUpSubmit = (() => {
		validateEmail();

		isFormSubmitted.value = true;
		isFormLoading.value = true;

		if (isEmailValid.value) {
			signUpformReqeust().then((response) => {
				formSubmitSuccess();
			}).catch((error) => {
				// API error
				formSubmtiFail();
			})
		} else {
			// Email invalid
			formSubmtiFail();
		}
	});

	const signUpformReqeust = (async () => {
		return await $fetch(`${config.public.hyperloot.apiBase}/signup`, { 
            headers: {
				'Content-Type': 'application/json',
            },
            method: 'POST',
            body: {
                email: email.value,
            },
        });
	});

	const resetForm = (() => {
		isFormSubmitted.value = false;
		isFormSubmitSuccess.value = false;
	});

	const formSubmtiFail = (() => {
		isFormSubmitSuccess.value = false;
		isFormLoading.value = false;
	});

	const formSubmitSuccess = (() => {
		isFormSubmitSuccess.value = true;
		isFormLoading.value = false;
	});
</script>

<style lang="scss" scoped>

$signup-title-color: #e3efff;
$signup-description-color: #6A798A;

h2 {
	color: $signup-title-color;

	@include query.media('>md') {
		margin-bottom: 0.75rem;
	}

	@include query.media('>sm', '<=md') {
		margin-bottom: 0.75rem;
		font-size: global.$font-size-xxxl;
	}

	@include query.media('<=sm') {
		color: global.$color-text-white;
		margin-bottom: 0.75rem;
		font-size: global.$font-size-xxxl;
	}
}

.sign-up {
	display: flex;
	width: 100%;
	background-image: url('/home/hyperloot-cc0wars-signup-bg@2x.png');
	background-size: 1268px 190px;
	background-repeat: no-repeat;
	background-position: top center;

	@include query.media('>lg') {
		margin-top: 12rem;
		margin-bottom: 6rem;
		padding-top: 5rem;
	}

	@include query.media('>sm', '<=lg') {
		margin-top: 8rem;
		margin-bottom: 5rem;
		padding-top: 4rem;
	}

	@include query.media('<=sm') {
		margin-top: 6rem;
		margin-bottom: 6rem;
		padding-top: 3rem;
	}
}


.container {
	display: flex;
	flex-direction: column;;
	max-width: global.$container-width;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	align-items: center;

	@include query.media('>lg') {
		max-width: global.$container-width;
		justify-content: space-between;
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

.description {
	max-width: 38.75rem;
	color: $signup-description-color;
	text-align: center;

	@include query.media('>md') {
		margin-bottom: 2.25rem;
	}

	@include query.media('<=md') {
		margin-bottom: 1.75rem;
		font-size: global.$font-size-md;
	}
}

.form {
	display: flex;
	justify-content: center;
	width: 100%;

	@include query.media('>sm') {
		margin-bottom: 2rem;
	}

	@include query.media('<=sm') {
		margin-bottom: 1.25rem;
	}
}

.form-response {
	margin-bottom: 0.5rem;
	font-size: global.$font-size-sm;
}

.form-success {
	color: global.$color-green;
}

.form-error {
	color: global.$color-red;
}

.agreement {
	font-size: global.$font-size-xxxs;
	color: $signup-description-color;
	text-align: center;
}

.input-text {
	max-width: 17.5rem;
	width: 100%;
	margin-right: 1rem;
	padding-left: 1.125rem;
	padding-right: 1.125rem;
	background-color: global.$color-form-bg;
}

.input-button {
	width: 5.75rem;
	flex: 0 0 5.75rem;
	color: global.$color-bg;
	transition: opacity 380ms global.$ease-out-quint;

	&:hover {
		opacity: 0.85;
	}
}
</style>

