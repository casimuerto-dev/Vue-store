<template>
	<div class="summary">
		<img :src="`https://picsum.photos/seed/${props.name}/100/100`" />
		<div>
			<p>Porduct name</p>
			<p>amount{{ props.amount }}</p>
			<div class="actions">
				<button @click="cart.decrement(props.name)">less</button>
				<button @click="cart.increment(props.name)">more</button>
				<button>delete</button>
			</div>
		</div>
	</div>
</template>
<script setup>
import { defineProps } from "vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
const props = defineProps(["name", "amount"]);
console.log("props", props);
</script>
<style scoped>
.summary {
	display: flex;
	justify-content: space-evenly;
	width: 100%;
}
</style>
