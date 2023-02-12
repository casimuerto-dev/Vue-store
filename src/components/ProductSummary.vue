<template>
	<div class="summary">
		<img
			@click="handlePush(props.name)"
			class="summary__image"
			:src="`https://picsum.photos/seed/${props.name}/150/150`"
		/>
		<div class="summary__details">
			<p class="main__text--details">Porduct name</p>
			<p class="main__text--details">amount: {{ props.amount }}</p>

			<div class="actions">
				<button @click="cart.decrement(props.name)">less</button>
				<button @click="cart.increment(props.name)">more</button>
				<button @click="cart.deleteItem(props.name)">delete</button>
			</div>
			<p
				class="main__text--details"
				style="color: red; font-size: 11px; margin-top: 5px; line-height: 11px"
				v-if="cart.cantDeleteMore"
			>
				There should be at least <br />
				one item on the cart
			</p>
		</div>
	</div>
</template>
<script setup>
import { defineProps } from "vue";
import { useCartStore } from "../stores/cart";
import { useRouter } from "vue-router";

const router = useRouter();
const cart = useCartStore();
const props = defineProps(["name", "amount"]);
console.log("props", props);

const handlePush = (name) => {
	router.push(`/details/${name}`);
};
</script>
<style scoped>
.summary {
	display: flex;
	justify-content: space-evenly;
	width: 100%;
}
.summary__image {
	border-radius: 10%;
	border: 5px solid white;
}
.summary__image:hover {
	border: 5px solid var(--hover-color);
	cursor: pointer;
}
.summary__details {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.main__text--details {
	margin: 0;
}
</style>
