<template>
	<section class="sign-up">
		<h2>Prepare for Battle</h2>
		<div class="description">Sign up today for a chance to be among the first to play HyperLoot: CC0 Wars beta and receive special in-game items and exclusive digital collectibles.</div>
		<form method="POST" @submit.prevent="onSignUpSubmit">
			<input type="text" name="email" placeholder="Enter your email" required v-model.trim="email" @input="resetForm">
			<button type="submit">Sign Up</button>
		</form>
		<div class="formResponse" v-if="isFormSubmitted">
			<div class="successMsg" v-if="isFormSubmitSuccess">Thank you.</div>
			<div class="errorMsg" v-else>
				<template v-if="!isEmailValid">Please enter a valid email.</template>
				<template v-else-if="!isFormSubmitSuccess">Sorry, something went wrong. Please try again later.</template>
			</div>
		</div>
		<div class="agreement">By signing up, you agree to receive marketing emails from us.</div>
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

