<template>
	<div class="check">
		<h4 class="check__title">Summary</h4>
		<div>
			<h5 class="check__subtitle">Items</h5>
			<div class="check__item" v-for="(item, name) in props.items">
				<p>Product {{ name }}</p>
				<p>{{ item.amount * item.price }}</p>
			</div>
			<div class="check__item">
				<h4>Total</h4>
				<h4>{{ 500 }}</h4>
			</div>
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
}

.check__item {
	display: flex;
	justify-content: space-between;
}
</style>
