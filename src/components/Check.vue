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
				<p class="check__text">
					{{ parseFloat(item.amount * item.price).toFixed(2) }}
				</p>
			</div>
		</div>
		<hr style="width: 100%; margin: auto" />
		<div class="check__item">
			<h4 class="check__subtitle--modified">Total</h4>
			<h4 class="check__subtitle--modified">{{ total }}</h4>
		</div>
	</div>
</template>
<script setup>
import { defineProps, ref, onBeforeMount, watch } from "vue";
const props = defineProps(["items"]);
const entries = ref(Object.entries(props.items));
const total = ref(0);

watch(props.items, (newVal) => {
	entries.value = Object.entries(newVal);
	build(entries.value);
});

const build = (newVal) => {
	total.value = 0;
	newVal.forEach((element) => {
		total.value += element[1].price * element[1].amount;
	});
	total.value = parseFloat(total.value).toFixed(2);
};
onBeforeMount(() => {
	entries.value.forEach((element) => {
		total.value += element[1].price * element[1].amount;
	});
	total.value = parseFloat(total.value).toFixed(2);
});

console.log(entries.value);
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
	overflow-x: hidden;
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
