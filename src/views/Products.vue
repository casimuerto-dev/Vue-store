import Layout from '../components/Layout.vue';

<template>
	<Layout>
		<main class="main">
			<p class="main__text">The best selection to be the envy of your peers!</p>
			<div class="main__display">
				<div class="main__item" v-for="element in NumbersArray">
					<Transition name="fade" v-show="showProducts">
						<div class="context__wrapper">
							<img class="main__image--product" :src="element.url" />
							<p class="main__text--normal">
								This product is amazing because this and this and that
							</p>
						</div>
					</Transition>
				</div>
			</div>
		</main>
	</Layout>
</template>
<script setup>
import Layout from "../components/Layout.vue";
import { ref, onMounted } from "vue";

const showProducts = ref(false);
const NumbersArray = ref(Array(40).fill(0));

NumbersArray.value.forEach((element, index) => {
	NumbersArray.value.splice(index, 1, {
		url: `https://picsum.photos/seed/${index + 1}/300/300`,
	});
});

onMounted(() => {
	showProducts.value = true;
});
</script>

<style scoped>
.main__display {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	column-gap: 40px;
	row-gap: 40px;
}
.main__item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 500px;
}

.context__wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-in;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
