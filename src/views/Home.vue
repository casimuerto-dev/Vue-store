<template>
	<header class="header">
		<img
			class="header__image"
			src="../assets/mainBanner.png"
			alt="welcome to Casimuerto's Fun!"
		/>
		<div class="header__menu">
			<button class="header__button">Products</button>
			<button class="header__button">Other Stuff</button>
			<button class="header__button">About us</button>
		</div>
	</header>
	<main class="main">
		<section class="main__latest">
			<p class="main__text">Latest!</p>
			<div class="main__reel">
				<span
					:class="{
						'main__span-button': true,
						'material-symbols-outlined': true,
						disabled: backDisabled,
					}"
					@click="handleClick('back')"
				>
					arrow_back_ios
				</span>
				<img
					class="main__image"
					v-for="(el, index) in randomNumbers"
					v-show="currentImage === index"
					:src="`https://randomfox.ca/images/${el}.jpg`"
				/>

				<span
					:class="{
						'main__span-button': true,
						'material-symbols-outlined': true,
						disabled: nextDisabled,
					}"
					@click="handleClick('next')"
				>
					arrow_forward_ios
				</span>
			</div>
		</section>
		<section class="main__products">
			<div class="main__wrapper">
				<p class="main__text">Product 1!</p>
				<img class="productImage" src="https://picsum.photos/seed/also/300/300" />
			</div>
			<div class="main__wrapper">
				<p class="main__text">Product 2!</p>
				<img class="productImage" src="https://picsum.photos/seed/makia/300/300" />
			</div>
		</section>
	</main>
	<footer class="footer">
		<div class="footer__info">
			<p class="footer__text">Terms and conditions</p>
			<p class="footer__text">Certified f-boy</p>
			<p class="footer__text">Authorized by the state of Rick & Morty</p>
			<p class="footer__text">All lefts reserved</p>
		</div>
		<div class="footer__info">
			<p class="footer__text">Follow us on social media!</p>
			<p class="footer__text">FaceLedger</p>
			<p class="footer__text">Delayedgram</p>
			<p class="footer__text">Barker</p>
		</div>
	</footer>
</template>
<script setup>
import { ref, onBeforeMount, watch } from "vue";

onBeforeMount(() => {
	randomNumbers.value.forEach((el, index) => {
		randomNumbers.value[index] = Math.floor(Math.random() * 100 + 1);
	});
});
const randomNumbers = ref([0, 0, 0, 0, 0]);
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
.header {
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	max-width: 100%;
}
.header__image {
	width: 100%;
}

.header__menu {
	display: flex;
	justify-content: space-between;
	column-gap: 10px;
}

.header__button {
	background-color: azure;
	outline: none;
	border: none;
	flex: 1;
	height: 2rem;
}
.header__button:hover {
	background-color: rgb(176, 243, 243);
	cursor: pointer;
}

main {
	margin-top: 20px;
}

.latest {
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: var(--main-font);
}

span {
	font-size: 10vw;
}
span:hover {
	cursor: pointer;
}
.disabled {
	color: rgba(138, 141, 141, 0.575);
}
.reel {
	display: flex;
	align-items: center;
	justify-content: center;
}
.reelImage {
	max-height: 40%;
	margin: 20px;
	max-width: 30%;
}
.productImage {
	width: 300px;
	height: 300px;
}
</style>
