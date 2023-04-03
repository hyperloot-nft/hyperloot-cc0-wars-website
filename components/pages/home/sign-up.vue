<template>
	<section class="sign-up">
		<h2>Sign Up</h2>
		<form method="POST" @submit.prevent="onSignUpSubmit">
			<label for="email">Email:</label>
			<input type="text" name="email" placeholder="hello@cc0wars.com" required v-model.trim="email" @input="resetForm">
			<button type="submit">Sign Up</button>
		</form>
		<div v-if="isUserSubmitted && !isEmailValid">Please enter a valid email.</div>
	</section>
</template>

<script setup>
	const config = useRuntimeConfig();

	const email = ref('');
	const isEmailValid = ref(false);
	const isUserSubmitted = ref(false);

	const validateEmail = (() => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		isEmailValid.value = re.test(email.value);
	});

	const onSignUpSubmit = (() => {
		validateEmail();

		isUserSubmitted.value = true;

		if (isEmailValid.value) {
			signUpformReqeust().then((response) => {
				console.log(response);
			});
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
		isUserSubmitted.value = false;
	});
</script>
