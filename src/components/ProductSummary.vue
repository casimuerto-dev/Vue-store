<template>
	<div class="summary">
		<div
			class="imageLoader"
			style="width: 150px; height: 150px"
			v-if="!displayImage"
		></div>
		<img
			@click="handlePush(props.name)"
			class="summary__image main__image--product-D"
			:src="`https://picsum.photos/seed/${props.name}/150/150`"
			@load="displayImage = true"
		/>
		<div class="summary__details">
			<p class="main__text--details">Porduct {{ props.name }}</p>
			<p class="main__text--details">amount: {{ props.amount }}</p>
			<p class="main__text--details">
				Price per unit: {{ cart.storedItems.items[props.name].price }}
			</p>
			<div class="summary__actions">
				<button
					:class="{ summary__buttons: true, disabled: props.amount < 2 }"
					@click="cart.decrement(props.name)"
				>
					Less
				</button>
				<button class="summary__buttons" @click="cart.increment(props.name)">
					More
				</button>
				<button
					class="summary__buttons delete"
					@click="cart.deleteItem(props.name)"
				>
					Delete
				</button>
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
import { defineProps, ref } from "vue";
import { useCartStore } from "../stores/cart";
import { useRouter } from "vue-router";

const router = useRouter();
const cart = useCartStore();
const props = defineProps(["name", "amount"]);
const displayImage = ref(false);
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
	transition: all ease-in 0.25s;
	width: 150px;
	height: 150px;
}
.summary__image:hover {
	width: 160px;
	height: 160px;
	cursor: pointer;
	box-shadow: 5px 5px 10px black;
}
.summary__details {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.summary__actions {
	display: flex;
	flex-wrap: nowrap;
}
.summary__buttons {
	background-color: var(--active-color);
	color: white;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px lightgray;
	margin: 0 2px;
	cursor: pointer;
	font-size: 15px;
	padding: 8px;
}

.summary__buttons:hover {
	background-color: var(--hover-color);
	box-shadow: 5px 5px 10px gray;
}

.delete:hover {
	background-color: rgb(248, 115, 115);
}

.summary__buttons:active {
	background-color: black;
}

.disabled {
	background-color: lightgray !important;
	color: rgb(155, 149, 149) !important;
}
.disabled:hover {
	box-shadow: none;
	box-shadow: 5px 5px 10px lightgray !important;
}
.main__text--details {
	margin: 0;
}
</style>
