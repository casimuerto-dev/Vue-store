<template>
	<div class="check">
		<h4 class="main__text">Summary</h4>
		<div>
			<div class="check__item">
				<h5 class="check__subtitle">Items</h5>
				<h5 class="check__subtitle">Price</h5>
			</div>
			<div class="check__item" v-for="(item, name) in props.items">
				<p class="check__text">Product {{ name }}</p>
				<p class="check__text">{{ item.amount * item.price }}</p>
			</div>
		</div>
		<hr style="width: 100%; margin: auto" />
		<div class="check__item">
			<h4 class="check__subtitle--modified">Total</h4>
			<h4 class="check__subtitle--modified">{{ 500 }}</h4>
		</div>
	</div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["items"]);
console.log("check", props.items);
</script>
<style scoped>
.check {
	display: flex;
	flex-direction: column;
	padding: 5px;
	position: sticky;
	top: 0px;
	max-height: 100vh;
	overflow-y: auto;
}

.check__item {
	display: flex;
	justify-content: space-between;
}

.check__subtitle {
	color: black;
	padding: 2px;
	border-radius: 2px;
	font-family: var(--main-font);
	font-weight: bold;
	text-decoration: underline;
	font-size: 15px;
}

.check__subtitle--modified {
	color: black;
	padding: 2px;
	border-radius: 2px;
	font-family: var(--main-font);
	font-weight: bold;
	font-size: 17px;
}

.check__text {
	font-family: var(--normal-font);
}

.main__text {
	margin: 0;
	background-color: black;
	position: unset;
}

.main__text--modified {
	text-align: center;
}
</style>
