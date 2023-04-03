<template>
	<section class="sign-up">
		<h2>Sign Up</h2>
		<form method="POST" @submit.prevent="onSignUpSubmit">
			<label for="email">Email:</label>
			<input type="text" name="email" placeholder="hello@cc0wars.com" required v-model="email">
			<button type="submit">Sign Up</button>
		</form>
		<span>{{ email }}</span>
	</section>
</template>

<script setup>
	const email = ref('');

	const onSignUpSubmit = (() => {
		console.log('submit');

		signUpformReqeust().then((response) => {
			console.log(response);
		});
	});

	const signUpformReqeust = (async () => {
		console.log('formReqeust');
		return await $fetch('http://localhost:8000/signup', { 
            headers: {
				"Content-Type": "application/json",
            },
            method: 'POST',
            body: {
                email: email.value,
            },
        });
	});
</script>
