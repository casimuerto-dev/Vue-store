<template>
	<Layout>
		<div class="cart">
			<div class="cart__left--column">
				<ProductSummary
					v-for="(item, name) in ItemsInCart.items"
					:name="name"
					:amount="item.amount"
				/>
			</div>
			<div class="cart__right--column"><Check :items="ItemsInCart.items" /></div>
		</div>
	</Layout>
</template>
<script setup>
import Layout from "../components/Layout.vue";
import ProductSummary from "../components/ProductSummary.vue";
import Check from "../components/Check.vue";

import { ref } from "vue";
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
const ItemsInCart = ref();
ItemsInCart.value = cart.storedItems;
console.log("items in cart:", ItemsInCart.value);
</script>
<style scoped>
.cart {
	display: flex;
	justify-content: space-evenly;
	padding-top: 15px;
	flex-wrap: wrap;
}

.cart__left--column {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	row-gap: 22px;
	flex-basis: 40%;
}

.cart__right--column {
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	box-shadow: 5px 5px 10px gray;
	flex-basis: 40%;
	height: auto;
}

@media screen and (max-width: 548px) {
	.cart__right--column {
		flex-basis: 64%;
	}
}
</style>
