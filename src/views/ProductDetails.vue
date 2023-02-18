import Layout from '../components/Layout.vue';

<template>
	<Layout>
		<div class="main">
			<div class="main__column--left">
				<Transition name="fade" v-show="displayDiv">
					<div class="main__wrapper">
						<p class="main__text main__text--modified">
							Product {{ route.params.name }}
						</p>
						<div class="imageLoader" v-show="!displayImage"></div>

						<img
							class="main__image--product-D"
							:src="`https://picsum.photos/seed/${route.params.name}/350/350`"
							@load="displayImage = true"
						/>

						<p class="main__text--normal">Description of the product</p>
						<p class="main__text--normal">
							This product is amazing because this and this and that
						</p>
					</div>
				</Transition>
			</div>
			<div class="main__column--right">
				<div class="main__wrapper--right">
					<h2 class="main__text" style="background-color: black; position: relative">
						Product Details
					</h2>

					<p class="main__text--details">
						This product will blow your mind!<br />
						This is the acclaimed
						<span style="text-decoration: underline"
							>Product {{ route.params.name }}</span
						>
						that has changed the way the world defines products.<br />
						Get yours now!
					</p>

					<p class="main__text--details">Perks of this product:</p>
					<ul>
						<li class="main__text--details">Warranty: 2 days!</li>
						<li class="main__text--details">Design: Beautiful colors</li>
						<li class="main__text--details">
							Accessories: Comes with everything you see!
						</li>
					</ul>

					<p class="main__text--price">
						${{
							parseInt(route.params.name) > 10
								? parseInt(route.params.name) + 10
								: parseInt(route.params.name) + 20
						}}.<span style="font-size: 14px">99</span>
					</p>
				</div>
				<div class="main__actions">
					<button class="main__actions--button" @click="handleClick('-')">-</button>
					<button class="main__actions--button" @click="handleClick('+')">+</button>
					<p class="main__actions--count">{{ count }}</p>
					<button class="main__actions--button" @click="handleAdd">
						Add to cart!
					</button>
				</div>
			</div>
		</div>
	</Layout>
</template>
<script setup>
import Layout from "../components/Layout.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
const route = useRoute();
const displayImage = ref(false);
const displayDiv = ref(false);
const count = ref(1);

console.log("product-name:", route.params.name);

const handleClick = (action) => {
	if (action === "+" && count.value < 10) {
		count.value += 1;
	} else if (action === "-" && count.value > 1) {
		count.value -= 1;
	}
};
const handleAdd = () => {
	cart.increment(route.params.name, count.value);
};
onMounted(() => {
	window.scrollTo(0, 170);
	displayDiv.value = true;
});
</script>
<style scoped>
.main {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}

.main__column--right {
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

@media screen and (max-width: 764px) {
	.main__column--right {
		width: 80%;
	}
}

.main__wrapper--right {
	justify-content: flex-start;
}

.main__text {
	margin-top: 30px;
}

.main__actions {
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
}

.main__image--product-D {
	border-radius: 20%;
	transition: all 1s ease-in;
	animation-name: appear;
	animation-duration: 1s;
	animation-timing-function: ease-in;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
}

.imageLoader {
	height: 350px;
	width: 350px;
	background-size: 10px;
	background: linear-gradient(90deg, lightgrey 40%, white, lightgrey 60%);
	border-radius: 20%;
	animation-name: movingBackground;
	animation-duration: 2s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-fill-mode: forwards;
}

@keyframes appear {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes movingBackground {
	from {
		background-position: -175px;
	}

	to {
		background-position: 175px;
	}
}

.main__actions--button {
	font-family: var(--main-font);
	font-size: 20px;
	color: white;
	background-color: var(--main-color);
	border: 1px solid black;
	cursor: pointer;
	margin: 0 5px;
}

.main__actions--count {
	margin: 0 10px;
	border: 1px solid black;
	border-radius: 2px;
	width: 20px;
	line-height: 27px;
	font-family: var(--normal-font);
}
</style>
