<template>
	<div class="loading">
		<div class="spinner">
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	small: {
		type: Boolean,
		default: false
	},
});
</script>

<style lang="scss" scoped>
.loading {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 28px;
	height: 28px;
}

.spinner {
	display: inline-block;
	position: relative;
	width: 28px;
	height: 28px;
}

.spinner div {
	position: absolute;
	border: 4px solid #000;
	opacity: 1;
	border-radius: 50%;
	animation: spinner 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.spinner div:nth-child(2) {
	animation-delay: -0.5s;
}

@keyframes spinner {
	0% {
		top: 14px;
		left: 14px;
		width: 0;
		height: 0;
		opacity: 0;
	}
	4.9% {
		top: 14px;
		left: 14px;
		width: 0;
		height: 0;
		opacity: 0;
	}
	5% {
		top: 14px;
		left: 14px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	100% {
		top: 0px;
		left: 0px;
		width: 25px;
		height: 25px;
		opacity: 0;
	}
}

</style>
