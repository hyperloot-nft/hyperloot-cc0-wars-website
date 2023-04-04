<template>
	<section class="sign-up">
		<div class="container">
			<h2>Prepare for Battle</h2>
			<div class="description">Sign up today for a chance to be among the first to play HyperLoot: CC0 Wars beta and receive special in-game items and exclusive digital collectibles.</div>
			<form class="form" method="POST" @submit.prevent="onSignUpSubmit">
				<input class="input-text" type="text" name="email" placeholder="Enter your email" required v-model.trim="email" @input="resetForm">
				<button class="input-button" type="submit">Sign up</button>
			</form>
			<div class="form-response" v-if="isFormSubmitted">
				<div class="form-success" v-if="isFormSubmitSuccess">Thank you.</div>
				<div class="form-error" v-else>
					<template v-if="!isEmailValid">Please enter a valid email.</template>
					<template v-else-if="!isFormSubmitSuccess">Sorry, something went wrong. Please try again later.</template>
				</div>
			</div>
			<div class="agreement">By signing up, you agree to receive marketing emails from us.</div>
		</div>
	</section>
</template>

<script setup>
	const config = useRuntimeConfig();

	const email = ref('');
	const isEmailValid = ref(false);
	const isFormSubmitted = ref(false);
	const isFormSubmitSuccess = ref(false);

	const validateEmail = (() => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		isEmailValid.value = re.test(email.value);
	});

	const onSignUpSubmit = (() => {
		validateEmail();

		isFormSubmitted.value = true;

		if (isEmailValid.value) {
			signUpformReqeust().then((response) => {
				isFormSubmitSuccess.value = true;
				console.log(response);
			}).catch((error) => {
				console.log(error);
				isFormSubmitSuccess.value = false;
			})
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
</script>

<style lang="scss" scoped>
$top-spacing: 12rem;
$bottom-spacing: 6rem;

$signup-title-color: #e3efff;
$signup-description-color: #6A798A;

h2 {
	margin-bottom: 0.75rem;
	color: $signup-title-color;
}

.sign-up {
	margin-top: $top-spacing;
	margin-bottom: $bottom-spacing;
	padding-top: 5rem;
	background-image: url('/home/hyperloot-cc0wars-signup-bg@2x.png');
	background-size: 1268px 190px;
	background-repeat: no-repeat;
	background-position: top center;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: global.$container-width;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}

.description {
	max-width: 38.75rem;
	margin-bottom: 2.25rem;
	color: $signup-description-color;
}

.form {
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 2rem;
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
	transition: opacity 380ms global.$ease-out-quint;

	&:hover {
		opacity: 0.85;
	}
}
</style>

