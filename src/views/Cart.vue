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
}

.cart__left--column {
	width: 50%;
}
</style>
