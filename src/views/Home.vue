<template>
	<header class="header">
		<img
			class="header__image"
			src="../assets/mainBanner.png"
			alt="welcome to Casimuerto's Fun!"
		/>
	</header>
	<div class="layout">
		<p class="main__text">Welcome</p>
		<div class="menu" ref="menu">
			<button class="menu__button">Products</button>
			<button class="menu__button">Other Stuff</button>
			<button class="menu__button">About us</button>
		</div>
		<img class="layout__image" src="../assets/toyota-supra.jpg" />

		<main class="main">
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
						<img
							v-for="(el, index) in randomNumbers"
							v-show="currentImage === index"
							class="main__image"
							:src="`https://picsum.photos/seed/${el}/300/300`"
							:key="index"
						/>
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
	</div>
	<footer class="footer">
		<div class="footer__info">
			<p class="footer__text" style="font-size: 25px; text-decoration: underline">
				Authorized by the state of Rick & Morty
			</p>
			<p class="footer__text">Certified f-boy</p>
			<p class="footer__text">Terms and conditions</p>
			<p class="footer__text">All lefts reserved</p>
		</div>
		<div class="footer__info">
			<p class="footer__text" style="font-size: 25px; text-decoration: underline">
				Follow us on social media!
			</p>
			<p class="footer__text">FaceLedger</p>
			<p class="footer__text">Delayedgram</p>
			<p class="footer__text">Barker</p>
		</div>
	</footer>
</template>
<script setup>
import { ref, onBeforeMount, onMounted, watch } from "vue";

const menu = ref(null);

onBeforeMount(() => {
	randomNumbers.value.forEach((el, index) => {
		randomNumbers.value[index] = Math.floor(Math.random() * 100 + 1);
	});
});
onMounted(() => {
	console.log(menu.value);
	const observer = new IntersectionObserver(
		([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
		{ threshold: [1] }
	);

	observer.observe(menu.value);
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
.header {
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	max-width: 100%;
	margin-bottom: 1px;
}
.header__image {
	width: 100%;
}

.layout {
	padding: 4px;
}

.layout__image {
	width: 100%;
	margin: 10px 0;
	border-radius: 2px;
}

.menu {
	display: flex;
	justify-content: space-between;
	column-gap: 10px;
	margin-bottom: 10px;
	/* position: sticky;
	top: -1px; */
}
.is-pinned .menu__button {
	color: white;
}
.menu__button {
	background-color: var(--secondary-color);
	outline: none;
	border: none;
	flex: 1;
	height: 2rem;
	border-radius: 5px;
	color: white;
	font-size: 15px;
	font-family: var(--normal-font);
	font-style: italic;
	transition: all 0.2s ease;
}
.menu__button:hover {
	background-color: var(--hover-color);
	cursor: pointer;
}

.menu__button:active {
	background-color: var(--active-color);
}

.main__latest {
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.main__text {
	width: 100%;
	font-family: var(--main-font);
	font-size: 25px;
	text-align: center;
	background-color: var(--main-color);
	color: white;
	position: sticky;
	top: 0px;
	border-radius: 20px;
}

.main__text--modified {
	position: static;
	background-color: var(--secondary-color);
}
.main__text--normal {
	text-align: center;
	font-family: var(--normal-font);
	font-style: italic;
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

.main__image--product {
	width: 300px;
	border-radius: 1rem;
	transition-property: width;
	transition-duration: 0.25s;
	transition-timing-function: ease-in;
	margin-top: 10px;
}

.main__image--product:hover {
	cursor: pointer;

	width: 320px;
}

.imageReel-move,
.imageReel-enter-active,
.imageReel-leave-active {
	transition: all 1s ease-in;
}
.imageReel-enter-from {
	opacity: 0;
}

.imageReel-leave-to {
	opacity: 0;
	transform: rotate(180deg);
}
.imageReel-leave-active {
	position: fixed;
}

.footer {
	display: flex;
	background-color: black;
	color: white;
	justify-content: space-around;
	margin-top: 200px;
}

.footer__info {
	display: flex;
	flex-direction: column;

	align-items: flex-start;
}

.footer__text {
	margin: 10px 0;
	font-family: var(--normal-font);
	transition: all 0.2s ease;
}
.footer__text:hover {
	cursor: pointer;
	color: var(--hover-color);
}

.footer__text:active {
	color: var(--active-color);
}
</style>
