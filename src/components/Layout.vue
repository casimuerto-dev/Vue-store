<template>
	<header class="header">
		<RouterLink to="/">
			<img
				class="header__image"
				src="../assets/mainBanner.png"
				alt="welcome to Casimuerto's Fun!"
			/>
		</RouterLink>
		<div class="menu" ref="menu">
			<button class="menu__button" @click="handlePush('products')">
				Products
			</button>

			<button class="menu__button" @click="handlePush">Other Stuff</button>
			<button class="menu__button" @click="handlePush">About us</button>
		</div>
	</header>
	<slot></slot>

	<footer class="footer">
		<div class="footer__info">
			<p class="footer__text" style="text-decoration: underline">
				Authorized by the state of Rick & Morty
			</p>
			<p class="footer__text">Certified f-boy</p>
			<p class="footer__text">Terms and conditions</p>
			<p class="footer__text">All lefts reserved</p>
		</div>
		<div class="footer__info">
			<p class="footer__text" style="text-decoration: underline">
				Follow us on social media!
			</p>
			<p class="footer__text">FaceLedger</p>
			<p class="footer__text">Delayedgram</p>
			<p class="footer__text">Barker</p>
		</div>
	</footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handlePush = (route) => {
	router.push(route);
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	max-width: 100%;
	margin-bottom: 1px;
	background-color: rgba(172, 28, 175);
}
.header__image {
	width: 100%;
}
.footer {
	display: flex;
	background-color: black;
	color: white;
	justify-content: space-around;
	margin-top: 115px;
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

@media screen and (max-width: 540px) {
	.footer {
		flex-direction: column;
	}
	.footer__info {
		align-items: center;
	}
}

.menu {
	display: flex;
	justify-content: space-between;
	column-gap: 10px;
	margin-bottom: 10px;
	padding: 0 5px;
}
.is-pinned .menu__button {
	color: white;
}
.menu__button {
	background-color: rgba(255, 0, 0, 0);
	outline: none;
	border: none;
	flex: 1;
	height: 2rem;
	border: 1px solid white;
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
</style>
