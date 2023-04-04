<template>
	<section class="sign-up">
		<h2>Sign Up</h2>
		<form method="POST" @submit.prevent="onSignUpSubmit">
			<label for="email">Email:</label>
			<input type="text" name="email" placeholder="hello@cc0wars.com" required v-model.trim="email" @input="resetForm">
			<button type="submit">Sign Up</button>
		</form>
		<div v-if="isFormSubmitted && !isEmailValid">Please enter a valid email.</div>
		<div v-if="isFormSubmitted && isFormSubmitSuccess">Thank you.</div>
		<div v-else-if="isFormSubmitted && !isFormSubmitSuccess && isEmailValid">Sorry, something went wrong. Please try again later.</div>
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
