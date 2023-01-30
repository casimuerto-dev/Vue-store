<template>
	<Layout>
		<main class="main">
			<!-- <p class="main__text">Welcome</p> -->

			<img
				class="main__image--presentation"
				src="../assets/toyota-supra-modified.jpg"
			/>
			<p class="main__text">Latest!</p>
			<section class="main__latest">
				<div class="main__reel">
					<span
						style="transform: rotate(180deg)"
						:class="{
							'main__arrow--button': true,
							'material-symbols-outlined': true,
							disabled: backDisabled,
						}"
						@click="handleClick('back')"
					>
						arrow_forward_ios
					</span>
					<TransitionGroup name="imageReel">
						<div
							class="main__imageReel-wrapper"
							v-for="(el, index) in randomNumbers"
							v-show="currentImage === index"
							:key="index"
						>
							<img
								class="main__image"
								:src="`https://picsum.photos/seed/${el}/300/300`"
							/>
							<p class="main__text--normal">
								This product is amazing because this and this and that
							</p>
						</div>
					</TransitionGroup>

					<span
						:class="{
							'main__arrow--button': true,
							'material-symbols-outlined': true,
							disabled: nextDisabled,
						}"
						@click="handleClick('next')"
					>
						arrow_forward_ios
					</span>
				</div>
			</section>
			<p class="main__text">Check out our main products!</p>
			<section class="main__products">
				<div class="main__wrapper">
					<p class="main__text main__text--modified">Product 1!</p>
					<img
						class="main__image--product"
						src="https://picsum.photos/seed/also/300/300"
					/>
					<p class="main__text--normal">Description of the product</p>
					<p class="main__text--normal">
						This product is amazing because this and this and that
					</p>
				</div>
				<div class="main__wrapper">
					<p class="main__text main__text--modified">Product 2!</p>

					<img
						class="main__image--product"
						src="https://picsum.photos/seed/makia/300/300"
					/>
					<p class="main__text--normal">Description of the product</p>
					<p class="main__text--normal">
						This product is amazing because this and this and that
					</p>
				</div>
			</section>
		</main>
	</Layout>
</template>
<script setup>
import { ref, onBeforeMount, onMounted, watch } from "vue";
import Layout from "../components/Layout.vue";

const menu = ref(null);
onBeforeMount(() => {
	randomNumbers.value.forEach((el, index) => {
		randomNumbers.value[index] = Math.floor(Math.random() * 100 + 1);
	});
});

const randomNumbers = ref([1, 2, 6, 4, 5]);
const currentImage = ref(0);
const backDisabled = ref(true);
const nextDisabled = ref(false);

const handleClick = (direction) => {
	if (direction === "next") {
		if (currentImage.value < 4) {
			currentImage.value += 1;
		}
	}
	if (direction === "back") {
		if (currentImage.value > 0) {
			currentImage.value -= 1;
		}
	}
};
watch(currentImage, (newVal, oldVal) => {
	if (newVal === 0) backDisabled.value = true;
	if (newVal > 0) backDisabled.value = false;
	if (newVal === 4) nextDisabled.value = true;
	if (newVal < 4) nextDisabled.value = false;
});
</script>
<style scoped>
.main__image--presentation {
	width: 100%;
	margin: 10px 0;
	border-radius: 2px;
}

.main__latest {
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.main__arrow--button {
	font-size: 10vw;
}
.main__arrow--button:hover {
	cursor: pointer;
}
.disabled {
	color: rgba(138, 141, 141, 0.575);
}
.main__reel {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
}

@media screen and (max-width: 430px) {
	.main__reel {
		z-index: 1;
		flex-direction: column;
	}
}
.main__image {
	margin: 20px;
	max-width: 300px;
	border-radius: 20px;
}

.main__products {
	display: flex;
	justify-content: space-evenly;
	margin-top: 20px;
}

.main__wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.main__imageReel-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.imageReel-enter-active,
.imageReel-leave-active {
	transition: all 1s ease-in;
}
.imageReel-enter-from {
	opacity: 0;
	transform: translateX(-500px);
}

.imageReel-leave-to {
	opacity: 0;
	transform: translateX(500px);
}
.imageReel-leave-active {
	position: absolute;
}
</style>
