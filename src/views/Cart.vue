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
			<div class="cart__right--column">asd</div>
		</div>
	</Layout>
</template>
<script setup>
import Layout from "../components/Layout.vue";
import ProductSummary from "../components/ProductSummary.vue";

import { ref } from "vue";
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
const ItemsInCart = ref();
ItemsInCart.value = cart.storedItems;
console.log(ItemsInCart.value);
</script>
<style scoped>
.cart {
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
}

.cart__left--column {
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	row-gap: 22px;
}
</style>
